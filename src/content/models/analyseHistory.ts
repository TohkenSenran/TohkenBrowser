import { browser } from 'webextension-polyfill-ts';

import {
  HistoryTableContents,
  historyTableContentsInitialState,
} from '../../handbook/states/HistoryTableContents';
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

const setRecode = (recode: string[], recodeTime: string): void => {
  if (recode.length > 1) {
    // console.log('recode %o', recode);
    const historyRecode: HistoryTableContents = { ...historyTableContentsInitialState };
    for (let i = 0; i < recode.length; i += 1) {
      const key = `value${i}`;
      historyRecode[key as keyof HistoryTableContents] = recode[i];
    }
    browser.storage.local.set({ [recodeTime]: historyRecode });
    // console.log('recode %o', recode);
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

// イベント出陣難易度
const setEventDifficultyLevel = (
  recode: string[],
  episodeId: string,
  fieldId: string,
): string[] => {
  if (episodeId in battleFieldName && fieldId in battleFieldName[episodeId]) {
    recode.push(battleFieldName[episodeId][fieldId]);
  } else {
    recode.push(battleFieldName['0']['0']);
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
    const recodeTime: string = Date.now().toString();
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
        // 鍛刀情報
        if (jsonValue.sword_id === null) {
          recode.push('鍛刀時間');
          recode.push(getRemainingTime(jsonValue.finished_at, Date.parse(jsonValue.now)).slice(-5));
        } else {
          recode.push('鍛刀男子');
          recode.push(getSwordName(undefined, undefined, jsonValue.sword_id));
        }
        recode = setUseResource(recode, resource, oldState);
        break;
      case 'produce/start':
        // console.log('home in history');
        // console.log('recode %o', recode);
        // console.log('requestData', jsonValue.requestData);
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

        recode.push('刀装十連');
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
        // console.log('requestData', jsonValue.requestData);

        recode.push('手入');
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
        recode = setUseResource(recode, resource, oldState);
        break;
      case 'duty/start':
        // console.log('requestData', jsonValue.requestData);

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
        // console.log('requestData: ', jsonValue.requestData);
        // request情報から出陣関連情報取得
        recode.push('出陣');
        // console.log('requestProps ', requestProps);
        if (page === 'sally/sally') {
          recode.push(`${requestProps.episodeId}-${requestProps.fieldId}`);
        } else if (jsonValue.gimmick) {
          recode.push('秘宝の里');
          recode = setEventDifficultyLevel(recode, requestProps.episodeId, requestProps.fieldId);
        } else if (jsonValue.allout) {
          recode.push('連隊戦');
          recode = setEventDifficultyLevel(recode, requestProps.episodeId, requestProps.fieldId);
          // 要対応：難易度・乱への対応
        } else if (jsonValue.freesearch) {
          recode.push('江戸城');
          recode = setEventDifficultyLevel(recode, requestProps.episodeId, requestProps.fieldId);
        } else if (jsonValue.tsukimi) {
          recode.push('月見');
          recode = setEventDifficultyLevel(recode, requestProps.episodeId, requestProps.fieldId);
        } else if (jsonValue.setsubun) {
          recode.push('節分');
          recode = setEventDifficultyLevel(recode, requestProps.episodeId, requestProps.fieldId);
        } else if (jsonValue.koban) {
          recode.push('大阪城');
          if (requestProps.eventLayerId !== '0') {
            recode.push(`${requestProps.eventLayerId}階`);
          } else {
            recode.push('階数不明');
          }
        } else if (jsonValue.research) {
          recode.push('特命調査');
        } else if (jsonValue.kumamoto) {
          recode.push('特命調査-慶長熊本');
        } else {
          // console.log(recode);
          recode.push('戦力拡充計画');
        } // 要対応：戦力拡充計画だけ？

        if (requestProps.partyNo !== '0' && party && party[requestProps.partyNo]) {
          recode = setCurrentParty(recode, party[requestProps.partyNo], sword);
        }
        break;
      case 'conquest/start':
        // console.log('requestData', jsonValue.requestData);

        recode.push('遠征');
        recode.push(
          conquestData[requestProps.fieldId in conquestData ? requestProps.fieldId : '0']
            .destination,
        );
        if (requestProps.partyNo !== '0' && party && party[requestProps.partyNo]) {
          recode = setCurrentParty(recode, party[requestProps.partyNo], sword);
        }
        break;
      case 'battle/practicescout':
        // console.log('requestData', jsonValue.requestData);

        recode.push('演練');
        if (requestProps.partyNo !== '0' && party && party[requestProps.partyNo]) {
          recode = setCurrentParty(recode, party[requestProps.partyNo], sword);
        }
        break;
      default:
        break;
    }
    setRecode(recode, recodeTime);

    // 在庫情報は随時更新
    // console.log('nowRecode', resource);
    // console.log('oldRecode', oldState.resource);

    recode = []; // リセット
    recode.push(jsonValue.now);
    if (
      resource.charcoal !== oldState.resource.charcoal ||
      resource.coolant !== oldState.resource.coolant ||
      resource.file !== oldState.resource.file ||
      resource.steel !== oldState.resource.steel
    ) {
      recode.push('資材在庫');
      resourceKeys = Object.keys(resourceType);
      // console.log('resouceKeys %o', resourceKeys);
      for (let i = 0; i < resourceKeys.length; i += 1) {
        recode.push(resourceType[resourceKeys[i] as keyof typeof resourceType]);
        recode.push(resource[resourceKeys[i] as keyof Resource].toString());
      }
      setRecode(recode, (parseInt(recodeTime, 10) + 1).toString());
    }
  }
};
