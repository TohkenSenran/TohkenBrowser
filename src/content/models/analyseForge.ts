/* eslint-disable @typescript-eslint/camelcase */
import { forgeNo } from '../../constants';
import { Forge, forgeInitialState, Forges } from '../states/responseJson/Forge';
import { RequestProps } from '../states/responseJson/RequestProps';
import { requestConverter } from './requestConverter';

export const analyseForge = (jsonValue: any, page: string, oldForge: Forges): Forges => {
  // console.log(`analyseForge ${page}`);
  let forge: Forges = oldForge ? { ...oldForge } : {};
  let singleForge: Forge = forgeInitialState;
  const requestProps: RequestProps = requestConverter(jsonValue.requestData);
  switch (page) {
    case 'home':
      // forgeの残数が返されるため無視する
      forge = oldForge ?? {};
      break;
    case 'forge/start':
      // 鍛刀情報がforgeに括られていない
      singleForge = {
        ...forgeInitialState,
        slot_no: jsonValue.slot_no,
        sword_id: jsonValue.sword_id,
        push_serial_id: jsonValue.push_serial_id,
        finished_at: jsonValue.finished_at,
        creating_at: jsonValue.now,
      };
      // 鍛刀後の情報（sword_id）がある場合は手伝い札を使用しているため登録不要
      if (!singleForge.sword_id) {
        forge[jsonValue.slot_no] = singleForge;
      }
      break;
    case 'forge/complete':
    case 'forge/fast':
      // console.log('in forge comp or fast');
      if (requestProps.slotNo in forge) {
        delete forge[requestProps.slotNo];
      }
      break;
    default:
      // 上記以外のページでは，forgeの内容が数値でない場合oldForgeを返して更新しない
      if ('forge' in jsonValue) {
        // console.log('JsonValue: %O', jsonValue);
        // console.log('find forge!: %O', jsonValue.forge);
        forge = {};
        for (let i = 0; i < forgeNo; i += 1) {
          if (jsonValue.forge[i + 1]) {
            // console.log(`check forge No ${(i + 1).toString()}`);
            forge[i + 1] = jsonValue.forge[i + 1];
            if (oldForge && oldForge[i + 1] && oldForge[i + 1].creating_at) {
              forge[i + 1].creating_at = oldForge[i + 1].creating_at;
            } else {
              forge[i + 1].creating_at = null;
            }
          }
        }
      } else {
        forge = oldForge;
      }
      break;
  }
  // console.log('forges: %O', forge);
  return forge;
};
