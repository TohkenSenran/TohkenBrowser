import { Parties } from "../states/responseJson/Party";
import { Swords } from "../states/responseJson/Sword";
import { Equips } from "../states/responseJson/Equip";
import { Forges } from "../states/responseJson/Forge";
import { Repairs } from "../states/responseJson/Repair";
import { Duty } from "../states/responseJson/Duty";
import { Resource } from "../states/responseJson/Resource";
import { resourceType, swordsProps } from "../../constants";

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
): void => {
  // 各操作での情報記録
  let recode: string[] = [];
  if ((jsonValue) && (jsonValue.now)) {
    // console.log('history page: ', page);
    // console.log('jsonValueSt:', jsonValue.toString());
    recode.push(jsonValue.now);
    switch (page) {
      case 'login/start':
        recode.push('ログイン');
        break;

      case 'home':
        // console.log('home in history');
        // console.log('recode %o', recode);
        recode.push('本丸');

        recode.push('近侍');
        recode.push(
          (
            (party) && (party[1]) && (party[1].slot) && (party[1].slot[1]) && (party[1].slot[1].serial_id) &&
            (sword) && (sword[party[1].slot[1].serial_id].sword_id)
          ) ? swordsProps[sword[party[1].slot[1].serial_id].sword_id.toString()].name : '不明'
        );
        // 資材情報
        const resourceKeys: string[] = Object.keys(resourceType);
        // console.log('resouceKeys %o', resourceKeys);
        for (let i: number = 0; i < resourceKeys.length; i += 1) {
          recode.push(resourceType[resourceKeys[i] as keyof typeof resourceType]);
          recode.push(resource[resourceKeys[i] as keyof Resource].toString());
        }
        break;
      default:
        break;
    }
    if (recode.length > 1) {
      // console.log('recode %o', recode);
    }
  }
};
