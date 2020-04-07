import { correctType, equipsStatus, statusLabel, statusType } from '../../constants';
import { Equip, Equips } from '../states/responseJson/Equip';
import { Sword, swordInitialState, Swords } from '../states/responseJson/Sword';

// 桜・疲労の補正
export const getFatigueCorrect = (fatigueValue: number): number => {
  if (fatigueValue < 10) {
    // 疲労困憊
    return 0.6;
  }
  if (fatigueValue < 20) {
    // 疲労
    return 0.8;
  }
  if (fatigueValue < 50) {
    // 通常
    return 1.0;
  }
  return 1.2; // 桜（好調）
};

// 装備込みのステータス計算
export const getEquipSwordStatus = (
  singleSword: Sword,
  selectTextType: statusType,
  horseDisable: boolean,
  equip: Equips,
): number => {
  // console.log('horseDisable: ', horseDisable);
  let equip1Id = '0';
  let equip2Id = '0';
  let equip3Id = '0';
  let horseId = '0';
  // equip, horseの種類（equip_id）取得
  if (singleSword.equip_serial_id1 !== null && singleSword.equip_serial_id1.toString() in equip) {
    const equip1: Equip = equip[singleSword.equip_serial_id1.toString()];
    equip1Id = equip1.equip_id.toString();
  }
  if (singleSword.equip_serial_id2 !== null && singleSword.equip_serial_id2.toString() in equip) {
    const equip2: Equip = equip[singleSword.equip_serial_id2.toString()];
    equip2Id = equip2.equip_id.toString();
  }
  if (singleSword.equip_serial_id3 !== null && singleSword.equip_serial_id3.toString() in equip) {
    const equip3: Equip = equip[singleSword.equip_serial_id3.toString()];
    equip3Id = equip3.equip_id.toString();
  }
  if (
    singleSword.horse_serial_id !== null &&
    singleSword.horse_serial_id.toString() in equip &&
    !horseDisable
  ) {
    const equipH: Equip = equip[singleSword.horse_serial_id.toString()];
    horseId = equipH.equip_id.toString();
  }

  let status = 0;

  const key: keyof Sword = statusType[selectTextType] as keyof Sword;
  status =
    parseInt((singleSword[key] ?? '0').toString(), 10) +
    (statusType[selectTextType] in equipsStatus[0] &&
    equip1Id in equipsStatus &&
    equip2Id in equipsStatus &&
    equip3Id in equipsStatus &&
    horseId in equipsStatus
      ? parseInt(equipsStatus[equip1Id][key].toString(), 10) +
        parseInt(equipsStatus[equip2Id][key].toString(), 10) +
        parseInt(equipsStatus[equip3Id][key].toString(), 10) +
        parseInt(equipsStatus[horseId][key].toString(), 10)
      : 0);
  return status;
};

export const swordConverter = (
  sword: Swords,
  serialId: string | number | null,
  selectCorrect: correctType = correctType.none,
  selectTextType: statusType = statusType.none,
  horseDisable = false,
  stateText = '',
  equip: Equips = {},
): {
  imageURL: string;
  fatigueValue: number;
  selectStatus: string;
} => {
  // console.log(`inSwordConv seiralId ${serialId}`);
  // console.log('selectTextType: ', selectTextType);

  // swordの取得
  let singleSword = swordInitialState;
  // console.log(`id check ${serialId} ${serialId ? serialId in sword : 'null'}`)
  singleSword =
    serialId && serialId.toString() in sword ? sword[serialId.toString()] : swordInitialState;

  // ダメージによる画像変更
  let damageState = 'Normal';
  const damageRate: number =
    parseInt(singleSword.hp.toString(), 10) / parseInt(singleSword.hp_max.toString(), 10);
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
  damageState =
    singleSword.status && singleSword.status.toString() === '1' ? 'Repair' : damageState;

  // 疲労値の取得
  let fatigueValue: number = parseInt(singleSword.fatigue.toString(), 10);
  if (fatigueValue < 49) {
    // 49未満の場合に時間で回復
    const pastMin: number = (Date.now() - Date.parse(singleSword.recovered_at.toString())) / 60000;
    fatigueValue =
      fatigueValue + 3 * Math.floor(pastMin / 3) < 50
        ? fatigueValue + 3 * Math.floor(pastMin / 3)
        : 49;
  }

  // 表示ステータス
  let selectStatus = '';
  let correctedValue = 0;
  if (serialId !== null && serialId.toString() in sword) {
    switch (selectTextType) {
      case statusType.none:
        break;
      case statusType.mobile:
        // 機動のみ補正
        switch (selectCorrect) {
          case correctType.none:
            correctedValue = getEquipSwordStatus(singleSword, selectTextType, horseDisable, equip);
            break;
          case correctType.normal:
            correctedValue =
              (1.0 + parseFloat(singleSword.level.toString()) * 0.04) *
              getFatigueCorrect(fatigueValue) *
              getEquipSwordStatus(singleSword, selectTextType, horseDisable, equip);
            break;
          case correctType.stage7:
            correctedValue =
              (1.0 + parseFloat(singleSword.level.toString()) * 0.02) *
              getFatigueCorrect(fatigueValue) *
              getEquipSwordStatus(singleSword, selectTextType, horseDisable, equip);
            break;
          default:
            break;
        }
        selectStatus = `${statusLabel[statusType[selectTextType]]}: ${Math.floor(correctedValue)}`;
        break;
      case statusType.fatigue:
        selectStatus = `${statusLabel[statusType[selectTextType]]}: ${fatigueValue}`;
        break;
      case statusType.amulet:
        selectStatus = `${statusLabel[statusType[selectTextType]]}: ${
          singleSword.item_id ? '有' : '無'
        }`;
        break;
      default:
        selectStatus = `${statusLabel[statusType[selectTextType]]}: ${getEquipSwordStatus(
          singleSword,
          selectTextType,
          horseDisable,
          equip,
        )}`;
    }
  }
  // 直接テキスト入力を受け付ける
  selectStatus = stateText || selectStatus;
  // console.log(`textCheck: ${selectStatus} `);
  return {
    imageURL: chrome.extension.getURL(
      `img/Setting/Swords/${singleSword.sword_id}/${damageState}.png`,
    ),
    fatigueValue,
    selectStatus,
  };
};
