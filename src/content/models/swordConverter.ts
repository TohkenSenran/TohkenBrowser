import { correctType, equipStatus, statusLabel, statusType } from '../../constants';
import { Equip, Equips } from '../states/responseJson/Equip';
import { Sword, swordInitialState, Swords } from '../states/responseJson/Sword';

export const swordConverter = (
  swords: Swords,
  serialId: string | number | null,
  selectCorrect?: correctType,
  selectTextType?: statusType,
  horseDisable?: boolean,
  stateText?: string,
  equips?: Equips,
) => {
  // console.log(`inSwordConv seiralId ${serialId}`);
  // console.log('selectTextType: ', selectTextType);
  // undefined対策
  if (swords === undefined) swords = {};
  if (serialId === undefined) serialId = null;
  if (selectCorrect === undefined) selectCorrect = correctType.none;
  if (selectTextType === undefined) selectTextType = statusType.none;
  if (horseDisable === undefined) horseDisable = false;
  if (equips === undefined) equips = {};

  // swordの取得
  let sword = swordInitialState;
  // console.log(`id check ${serialId} ${serialId ? serialId in swords : 'null'}`)
  sword = ((serialId) && (swords[serialId.toString()])) ?
    swords[serialId.toString()] : swordInitialState;

  // ダメージによる画像変更
  let damageState: string = 'Normal';
  const damageRate: number =
    parseInt(sword.hp.toString(), 10) / parseInt(sword.hp_max.toString(), 10);
  if (damageRate === 0) {
    damageState = 'Broken';
  } else if (damageRate < 0.31) {
    damageState = 'HeavyInjury';
  } else if (damageRate < 0.65) {
    damageState = 'MiddleInjury';
  } else if (damageRate < 0.9) {
    damageState = 'SlightInjury';
  }
  // 修理中の表示更新
  damageState = (sword.status) && (sword.status.toString() === '1') ? 'Repair' : damageState;

  // 疲労値の取得
  let fatigueValue: number = parseInt(sword.fatigue.toString(), 10);
  if (fatigueValue < 49) {
    // 49未満の場合に時間で回復
    const pastMin: number = (Date.now() - Date.parse(sword.recovered_at.toString())) / 60000;
    fatigueValue = (fatigueValue + 3 * Math.floor(pastMin / 3) < 50) ?
      fatigueValue + 3 * Math.floor(pastMin / 3) : 49;
  }

  // 表示ステータス
  let selectStatus: string = '';
  let correctedValue: number = 0;
  if ((serialId !== null) && (serialId.toString() in swords)) {
    switch (selectTextType) {
      case statusType.none:
        break;
      case statusType.mobile:
        // 機動のみ補正
        switch (selectCorrect) {
          case correctType.none:
            correctedValue =
              getEquipSwordStatus(sword, selectTextType, horseDisable, equips);
            break;
          case correctType.normal:
            correctedValue = (1.0 + parseFloat(sword.level.toString()) * 0.04) *
              getFatigueCorrect(fatigueValue) *
              getEquipSwordStatus(sword, selectTextType, horseDisable, equips);
            break;
          case correctType.stage7:
            correctedValue = (1.0 + parseFloat(sword.level.toString()) * 0.02) *
              getFatigueCorrect(fatigueValue) *
              getEquipSwordStatus(sword, selectTextType, horseDisable, equips);
            break;
        }
        selectStatus =
          `${statusLabel[statusType[selectTextType]]}: ${Math.floor(correctedValue)}`;
        break;
      case statusType.fatigue:
        selectStatus =
          `${statusLabel[statusType[selectTextType]]}: ${fatigueValue}`;
        break;
      case statusType.amulet:
        selectStatus =
          `${statusLabel[statusType[selectTextType]]}: ${sword.item_id ? '有' : '無'}`;
        break;
      default:
        selectStatus =
          `${statusLabel[statusType[selectTextType]]}: ${getEquipSwordStatus(sword, selectTextType, horseDisable, equips)}`;
    }
  }
  // 直接テキスト入力を受け付ける
  selectStatus = stateText ? stateText : selectStatus;
  // console.log(`textCheck: ${selectStatus} `);
  return ({
    imageURL: chrome.extension.getURL(
      `img/Setting/Swords/${sword.sword_id}/${damageState}.png`,
    ),
    fatigueValue,
    selectStatus,
  });
};

// 装備込みのステータス計算
export const getEquipSwordStatus =
  (sword: Sword, selectTextType: statusType, horseDisable: boolean, equips: Equips): number => {

    // console.log('horseDisable: ', horseDisable);
    let equip1Id: string = '0';
    let equip2Id: string = '0';
    let equip3Id: string
      = '0';
    let horseId: string = '0';
    // equip, horseの種類（equip_id）取得
    if ((sword.equip_serial_id1 !== null) && (sword.equip_serial_id1.toString() in equips)) {
      const equip1: Equip = equips[sword.equip_serial_id1.toString()];
      equip1Id = equip1.equip_id.toString();
    }
    if ((sword.equip_serial_id2 !== null) && (sword.equip_serial_id2.toString() in equips)) {
      const equip2: Equip = equips[sword.equip_serial_id2.toString()];
      equip2Id = equip2.equip_id.toString();
    }
    if ((sword.equip_serial_id3 !== null) && (sword.equip_serial_id3.toString() in equips)) {
      const equip3: Equip = equips[sword.equip_serial_id3.toString()];
      equip3Id = equip3.equip_id.toString();
    }
    if (
      (sword.horse_serial_id !== null) &&
      (sword.horse_serial_id.toString() in equips) &&
      !horseDisable
    ) {
      const equipH: Equip = equips[sword.horse_serial_id.toString()];
      horseId = equipH.equip_id.toString();
    }
    const status: number = parseInt(sword[statusType[selectTextType]], 10) +
      (
        statusType[selectTextType] in equipStatus[0] ? (
          parseInt(equipStatus[equip1Id][statusType[selectTextType]], 10) +
          parseInt(equipStatus[equip2Id][statusType[selectTextType]], 10) +
          parseInt(equipStatus[equip3Id][statusType[selectTextType]], 10) +
          parseInt(equipStatus[horseId][statusType[selectTextType]], 10)) : 0
      );
    return status;
  };

// 桜・疲労の補正
export const getFatigueCorrect = (fatigueValue: number): number => {
  if (fatigueValue < 10) { // 疲労困憊
    return 0.6;
  }
  if (fatigueValue < 20) { // 疲労
    return 0.8;
  }
  if (fatigueValue < 50) { // 通常
    return 1.0;
  }
  return 1.2; // 桜（好調）
};
