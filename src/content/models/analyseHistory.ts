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

const setRecord = (record: string[], recordTime: string): void => {
  if (record.length > 1) {
    // console.log('record %o', record);
    const historyRecord: HistoryTableContents = { ...historyTableContentsInitialState };
    for (let i = 0; i < record.length; i += 1) {
      const key = `value${i}`;
      historyRecord[key as keyof HistoryTableContents] = record[i];
    }
    browser.storage.local.set({ [recordTime]: historyRecord });
    // console.log('record %o', record);
  }
};

// 出陣部隊
const setCurrentParty = (record: string[], currentParty: Party, sword: Swords): string[] => {
  if (currentParty && currentParty.slot && sword) {
    for (let i = 0; i < partyMemberNo; i += 1) {
      if (
        currentParty.slot[i + 1].serial_id !== null &&
        currentParty.slot[i + 1].serial_id !== 0 &&
        currentParty.slot[i + 1].serial_id !== '0'
      ) {
        // console.log('in slot');
        record.push(getSwordName(currentParty.slot[i + 1].serial_id, sword));
      }
    }
  }
  return record;
};

// イベント出陣難易度
const setEventDifficultyLevel = (
  record: string[],
  episodeId: string,
  fieldId: string,
): string[] => {
  if (episodeId in battleFieldName && fieldId in battleFieldName[episodeId]) {
    record.push(battleFieldName[episodeId][fieldId]);
  } else {
    record.push(battleFieldName['0']['0']);
  }
  return record;
};

// 近侍
const setKinji = (record: string[], party: Parties, sword: Swords): string[] => {
  record.push('近侍');
  record.push(
    party && party[1] && party[1].slot && party[1].slot[1] && party[1].slot[1].serial_id && sword
      ? getSwordName(party[1].slot[1].serial_id, sword)
      : '不明',
  );
  return record;
};

// 使用資材
const setUseResource = (
  record: string[],
  resource: Resource,
  oldState: ResponseJsonState,
): string[] => {
  // 使用資材情報
  record.push('使用資材');
  const resourceKeys = Object.keys(resourceType);
  const oldResource = oldState.resource;
  // console.log('resouceKeys %o', resourceKeys);
  for (let i = 0; i < resourceKeys.length; i += 1) {
    record.push(resourceType[resourceKeys[i] as keyof typeof resourceType]);
    record.push(
      (
        parseFloat(oldResource[resourceKeys[i] as keyof Resource].toString()) -
        parseFloat(resource[resourceKeys[i] as keyof Resource].toString())
      ).toString(),
    );
  }
  return record;
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
  let record: string[] = [];
  let resourceKeys: string[] = [];
  let producedEquips: Equip[] = [];
  if (jsonValue && jsonValue.now) {
    // console.log('history page: ', page);
    // console.log('jsonValueSt:', jsonValue.toString());
    const recordTime: string = Date.now().toString();
    const requestProps: RequestProps = requestConverter(jsonValue.requestData);

    record.push(jsonValue.now);
    switch (page) {
      case 'login/start':
        record.push('ログイン');
        break;

      case 'forge/start':
        // console.log('home in history');
        // console.log('record %o', record);
        // console.log('requestData', jsonValue.requestData);

        record.push('鍛刀');
        record = setKinji(record, party, sword);
        record.push('御札');
        record.push(
          requestProps.consumableId !== '0' ? itemName[1][requestProps.consumableId] : '無し',
        );
        record.push('手伝い札');
        record.push(requestProps.useAssist ? '有' : '無');
        // 鍛刀情報
        if (jsonValue.sword_id === null) {
          record.push('鍛刀時間');
          record.push(getRemainingTime(jsonValue.finished_at, Date.parse(jsonValue.now)).slice(-5));
        } else {
          record.push('鍛刀男士');
          record.push(getSwordName(undefined, undefined, jsonValue.sword_id));
        }
        record = setUseResource(record, resource, oldState);
        break;
      case 'forge/fast':
      case 'forge/complete':
        // console.log('requestData', jsonValue.requestData);
        record.push('鍛刀完了');
        record.push('鍛刀男士');
        if (jsonValue.sword_id) {
          record.push(getSwordName(undefined, undefined, jsonValue.sword_id));
        } else {
          record.push('取得失敗');
        }
        break;

      case 'produce/start':
        // console.log('home in history');
        // console.log('record %o', record);
        // console.log('requestData', jsonValue.requestData);
        record.push('刀装作成');
        record = setKinji(record, party, sword);
        record = setUseResource(record, resource, oldState);
        // 刀装結果
        record.push('作成物');
        if (jsonValue.serial_id !== '0') {
          record.push(
            jsonValue.equip_id in equipsStatus ? equipsStatus[jsonValue.equip_id].name : '不明',
          );
        } else {
          record.push('失敗');
        }
        break;
      case 'produce/continue':
        // console.log('home in history');
        // console.log('record %o', record);

        record.push('刀装十連');
        record = setKinji(record, party, sword);
        record = setUseResource(record, resource, oldState);
        // 刀装結果
        record.push('作成物');
        producedEquips = jsonValue.equip;
        producedEquips.forEach((value) => {
          if (value.serial_id.toString() !== '0') {
            record.push(
              value.equip_id in equipsStatus ? equipsStatus[value.equip_id].name : '不明',
            );
          } else {
            record.push('失敗');
          }
        });
        break;
      case 'repair/repair':
        // console.log('in repair/repair');
        // console.log('requestData', jsonValue.requestData);

        record.push('手入');
        record.push('対象男士');
        // console.log('repair', repair);
        // console.log('oldRepair', oldState.repair);
        for (let i = 0; i < forgeNo; i += 1) {
          if (repair[i + 1] && !oldState.repair[i + 1]) {
            // console.log('repair Slot', (i + 1));
            record.push(getSwordName(repair[i + 1].sword_serial_id, sword));
            record.push('手入時間');
            record.push(
              getRemainingTime(repair[i + 1].finished_at, Date.parse(jsonValue.now)).slice(-5),
            );
          }
        }
        record = setUseResource(record, resource, oldState);
        break;
      case 'duty/start':
        // console.log('requestData', jsonValue.requestData);

        break;
      case 'home':
        if (oldState.page === 'duty/start') {
          record.push('内番');
          record.push('馬当番');
          record.push(getSwordName(duty.horse_id1, sword));
          record.push(getSwordName(duty.horse_id2, sword));
          record.push('畑当番');
          record.push(getSwordName(duty.field_id1, sword));
          record.push(getSwordName(duty.field_id2, sword));
          record.push('手合せ');
          record.push(getSwordName(duty.bout_id1, sword));
          record.push(getSwordName(duty.bout_id2, sword));
        }
        break;
      case 'sally/sally':
      case 'sally/eventsally':
        // console.log('requestData: ', jsonValue.requestData);
        console.log('requestProps ', requestProps);
        // request情報から出陣関連情報取得
        record.push('出陣');
        if (page === 'sally/sally') {
          record.push(`${requestProps.episodeId}-${requestProps.fieldId}`);
        } else if (jsonValue.gimmick) {
          record.push('秘宝の里');
          record = setEventDifficultyLevel(record, requestProps.episodeId, requestProps.fieldId);
        } else if (jsonValue.allout) {
          record.push('連隊戦');
          record = setEventDifficultyLevel(record, requestProps.episodeId, requestProps.fieldId);
          // 要対応：難易度・乱への対応
        } else if (jsonValue.freesearch) {
          record.push('江戸城');
          record = setEventDifficultyLevel(record, requestProps.episodeId, requestProps.fieldId);
        } else if (jsonValue.tsukimi) {
          record.push('月見');
          record = setEventDifficultyLevel(record, requestProps.episodeId, requestProps.fieldId);
        } else if (jsonValue.setsubun) {
          record.push('節分');
          record = setEventDifficultyLevel(record, requestProps.episodeId, requestProps.fieldId);
        } else if (jsonValue.hanabi) {
          record.push('夜花奪還作戦');
        } else if (jsonValue.koban) {
          record.push('大阪城');
          if (requestProps.eventLayerId !== '0') {
            record.push(`${requestProps.eventLayerId}階`);
          } else {
            record.push('階数不明');
          }
        } else if (jsonValue.research) {
          record.push('特命調査');
        } else if (jsonValue.kumamoto) {
          record.push('特命調査-慶長熊本');
        } else if (jsonValue.kofu) {
          record.push('特命調査-慶応甲府');
        } else if (jsonValue.kunren) {
          record.push('対大侵寇強化プログラム');
          // 序盤移行どうなるか注意
          switch (requestProps.fieldId) {
            case '1':
              record.push('初級');
              break;
            case '2':
              record.push('中級');
              break;
            case '3':
              record.push('上級');
              break;
            case '4':
              record.push('特級');
              break;
            default:
              record.push('級不明');
              break;
          }
        } else {
          // console.log(record);
          record.push('戦力拡充計画');
        } // 要対応：戦力拡充計画だけ？

        if (requestProps.partyNo !== '0' && party && party[requestProps.partyNo]) {
          record = setCurrentParty(record, party[requestProps.partyNo], sword);
        }
        break;
      case 'conquest/start':
        // console.log('requestData', jsonValue.requestData);

        record.push('遠征');
        record.push(
          conquestData[requestProps.fieldId in conquestData ? requestProps.fieldId : '0']
            .destination,
        );
        if (requestProps.partyNo !== '0' && party && party[requestProps.partyNo]) {
          record = setCurrentParty(record, party[requestProps.partyNo], sword);
        }
        break;
      case 'battle/practicescout':
        // console.log('requestData', jsonValue.requestData);

        record.push('演練');
        if (requestProps.partyNo !== '0' && party && party[requestProps.partyNo]) {
          record = setCurrentParty(record, party[requestProps.partyNo], sword);
        }
        break;
      default:
        break;
    }
    setRecord(record, recordTime);

    // 在庫情報は随時更新
    // console.log('nowRecord', resource);
    // console.log('oldRecord', oldState.resource);

    record = []; // リセット
    record.push(jsonValue.now);
    if (
      resource.charcoal !== oldState.resource.charcoal ||
      resource.coolant !== oldState.resource.coolant ||
      resource.file !== oldState.resource.file ||
      resource.steel !== oldState.resource.steel
    ) {
      record.push('資材在庫');
      resourceKeys = Object.keys(resourceType);
      // console.log('resouceKeys %o', resourceKeys);
      for (let i = 0; i < resourceKeys.length; i += 1) {
        record.push(resourceType[resourceKeys[i] as keyof typeof resourceType]);
        record.push(resource[resourceKeys[i] as keyof Resource].toString());
      }
      setRecord(record, (parseInt(recordTime, 10) + 1).toString());
    }
  }
};
