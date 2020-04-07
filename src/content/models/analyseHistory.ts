import { Parties, Party } from '../states/responseJson/Party';
import { Swords } from '../states/responseJson/Sword';
import { Equip, Equips } from '../states/responseJson/Equip';
import { Forges } from '../states/responseJson/Forge';
import { Repairs } from '../states/responseJson/Repair';
import { Duty } from '../states/responseJson/Duty';
import { Resource } from '../states/responseJson/Resource';
import {
  battleFieldName,
  conquestData,
  equipsStatus,
  forgeNo,
  itemName,
  partyMemberNo,
  resourceType,
} from '../../constants';
import { ResponseJsonState } from '../states/ResponseJsonState';
import { getRemainingTime } from './getRemainingTime';
import { getSwordName } from './getSwordName';
import { RequestProps } from '../states/responseJson/RequestProps';
import { requestConverter } from './requestConverter';

const setRecode = (recode: string[]): void => {
  if (recode.length > 1) {
    console.log('recode %o', recode);
  }
};

// 出陣部隊
const setCurrentParty = (recode: string[], currentParty: Party, sword: Swords): string[] => {
  if (currentParty && currentParty.slot && sword) {
    for (let i = 0; i < partyMemberNo; i += 1) {
      if (
        currentParty.slot[i + 1].serial_id !== null &&
        currentParty.slot[i + 1].serial_id !== 0 &&
        currentParty.slot[i + 1].serial_id !== '0'
      ) {
        // console.log('in slot');
        recode.push(getSwordName(currentParty.slot[i + 1].serial_id, sword));
      }
    }
  }
  return recode;
};

// 近侍
const setKinji = (recode: string[], party: Parties, sword: Swords): string[] => {
  recode.push('近侍');
  recode.push(
    party && party[1] && party[1].slot && party[1].slot[1] && party[1].slot[1].serial_id && sword
      ? getSwordName(party[1].slot[1].serial_id, sword)
      : '不明',
  );
  return recode;
};

// 使用資材
const setUseResource = (
  recode: string[],
  resource: Resource,
  oldState: ResponseJsonState,
): string[] => {
  // 使用資材情報
  recode.push('使用資材');
  const resourceKeys = Object.keys(resourceType);
  const oldResource = oldState.resource;
  // console.log('resouceKeys %o', resourceKeys);
  for (let i = 0; i < resourceKeys.length; i += 1) {
    recode.push(resourceType[resourceKeys[i] as keyof typeof resourceType]);
    recode.push(
      (
        parseFloat(oldResource[resourceKeys[i] as keyof Resource].toString()) -
        parseFloat(resource[resourceKeys[i] as keyof Resource].toString())
      ).toString(),
    );
  }
  return recode;
};

export const analyseHistory = (
  jsonValue: any,
  page: string,
  sword: Swords,
  party: Parties,
  equip: Equips,
  forge: Forges,
  repair: Repairs,
  duty: Duty,
  resource: Resource,
  oldState: ResponseJsonState,
): void => {
  // 各操作での情報記録
  let recode: string[] = [];
  let resourceKeys: string[] = [];
  let producedEquips: Equip[] = [];
  if (jsonValue && jsonValue.now) {
    // console.log('history page: ', page);
    // console.log('jsonValueSt:', jsonValue.toString());

    const requestProps: RequestProps = requestConverter(jsonValue.requestData);

    recode.push(jsonValue.now);
    switch (page) {
      case 'login/start':
        recode.push('ログイン');
        break;

      case 'forge/start':
        // console.log('home in history');
        // console.log('recode %o', recode);
        // console.log('requestData', jsonValue.requestData);

        recode.push('鍛刀');
        recode = setKinji(recode, party, sword);
        recode.push('御札');
        recode.push(
          requestProps.consumableId !== '0' ? itemName[1][requestProps.consumableId] : '無し',
        );
        recode.push('手伝い札');
        recode.push(requestProps.useAssist ? '有' : '無');
        recode = setUseResource(recode, resource, oldState);
        // 鍛刀情報
        if (jsonValue.sword_id === null) {
          recode.push('鍛刀時間');
          recode.push(getRemainingTime(jsonValue.finished_at, Date.parse(jsonValue.now)).slice(-5));
        } else {
          recode.push('鍛刀男子');
          recode.push(getSwordName(undefined, undefined, jsonValue.sword_id));
        }
        break;
      case 'produce/start':
        // console.log('home in history');
        // console.log('recode %o', recode);
        // 札の使用情報は来ない ><
        console.log('requestData', jsonValue.requestData);

        recode.push('刀装作成');
        recode = setKinji(recode, party, sword);
        recode = setUseResource(recode, resource, oldState);
        // 刀装結果
        recode.push('作成物');
        if (jsonValue.serial_id !== '0') {
          recode.push(
            jsonValue.equip_id in equipsStatus ? equipsStatus[jsonValue.equip_id].name : '不明',
          );
        } else {
          recode.push('失敗');
        }
        break;
      case 'produce/continue':
        // console.log('home in history');
        // console.log('recode %o', recode);
        // 札の使用情報は来ない ><
        console.log('requestData', jsonValue.requestData);

        recode.push('刀装十連作成');
        recode = setKinji(recode, party, sword);
        recode = setUseResource(recode, resource, oldState);
        // 刀装結果
        recode.push('作成物');
        producedEquips = jsonValue.equip;
        producedEquips.forEach((value) => {
          if (value.serial_id.toString() !== '0') {
            recode.push(
              value.equip_id in equipsStatus ? equipsStatus[value.equip_id].name : '不明',
            );
          } else {
            recode.push('失敗');
          }
        });
        break;
      case 'repair/repair':
        // console.log('in repair/repair');
        console.log('requestData', jsonValue.requestData);

        recode.push('手入');
        recode = setUseResource(recode, resource, oldState);
        recode.push('対象男子');
        // console.log('repair', repair);
        // console.log('oldRepair', oldState.repair);
        for (let i = 0; i < forgeNo; i += 1) {
          if (repair[i + 1] && !oldState.repair[i + 1]) {
            // console.log('repair Slot', (i + 1));
            recode.push(getSwordName(repair[i + 1].sword_serial_id, sword));
            recode.push('手入時間');
            recode.push(
              getRemainingTime(repair[i + 1].finished_at, Date.parse(jsonValue.now)).slice(-5),
            );
          }
        }
        break;
      case 'duty/start':
        console.log('requestData', jsonValue.requestData);

        break;
      case 'home':
        if (oldState.page === 'duty/start') {
          recode.push('内番');
          recode.push('馬当番');
          recode.push(getSwordName(duty.horse_id1, sword));
          recode.push(getSwordName(duty.horse_id2, sword));
          recode.push('畑当番');
          recode.push(getSwordName(duty.field_id1, sword));
          recode.push(getSwordName(duty.field_id2, sword));
          recode.push('手合せ');
          recode.push(getSwordName(duty.bout_id1, sword));
          recode.push(getSwordName(duty.bout_id2, sword));
        }
        break;
      case 'sally/sally':
      case 'sally/eventsally':
        // bconsole.log('requestData: ', jsonValue.requestData);
        // request情報から出陣関連情報取得
        recode.push('出陣');
        // console.log('requestProps ', requestProps);
        if (page === 'sally/sally') {
          recode.push(`${requestProps.episodeId}-${requestProps.fieldId}`);
        } else if (Object.keys(jsonValue.gimmick).length > 0) {
          recode.push('秘宝の里');
        } else if (Object.keys(jsonValue.allout).length > 0) {
          recode.push('連隊戦');
        } else if (Object.keys(jsonValue.freesearch).length > 0) {
          recode.push('江戸城');
        } else if (Object.keys(jsonValue.tsukimi).length > 0) {
          recode.push('月見');
        } else if (Object.keys(jsonValue.setsubun).length > 0) {
          recode.push('節分');
        } else if (Object.keys(jsonValue.koban).length > 0) {
          recode.push('大阪城');
        } else if (Object.keys(jsonValue.research).length > 0) {
          recode.push('特命調査');
        } else {
          recode.push('不明');
        } // 要対応：戦力拡充計画
        if (
          requestProps.episodeId in battleFieldName &&
          requestProps.fieldId in battleFieldName[requestProps.episodeId]
        ) {
          recode.push(battleFieldName[requestProps.episodeId][requestProps.fieldId]);
        } else {
          recode.push(battleFieldName['0']['0']);
        }

        if (requestProps.partyId !== '0' && party && party[requestProps.partyId]) {
          recode = setCurrentParty(recode, party[requestProps.partyId], sword);
        }
        break;
      case 'conquest/start':
        // console.log('requestData', jsonValue.requestData);

        recode.push('遠征');
        recode.push(
          conquestData[requestProps.fieldId in conquestData ? requestProps.fieldId : '0']
            .destination,
        );
        if (requestProps.partyId !== '0' && party && party[requestProps.partyId]) {
          recode = setCurrentParty(recode, party[requestProps.partyId], sword);
        }
        break;
      case 'battle/practicescout':
        // console.log('requestData', jsonValue.requestData);

        recode.push('演練');
        if (requestProps.partyId !== '0' && party && party[requestProps.partyId]) {
          recode = setCurrentParty(recode, party[requestProps.partyId], sword);
        }
        break;
      default:
        break;
    }
    setRecode(recode);

    // 在庫情報は随時更新
    // console.log('nowRecode', resource);
    // console.log('oldRecode', oldState.resource);

    recode = []; // リセット
    if (
      resource.charcoal !== oldState.resource.charcoal ||
      resource.coolant !== oldState.resource.coolant ||
      resource.file !== oldState.resource.file ||
      resource.steel !== oldState.resource.steel
    ) {
      recode.push('在庫資材');
      resourceKeys = Object.keys(resourceType);
      // console.log('resouceKeys %o', resourceKeys);
      for (let i = 0; i < resourceKeys.length; i += 1) {
        recode.push(resourceType[resourceKeys[i] as keyof typeof resourceType]);
        recode.push(resource[resourceKeys[i] as keyof Resource].toString());
      }
      setRecode(recode);
    }
  }
};
