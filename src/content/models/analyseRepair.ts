import { repairNo } from '../../constants';
import { Repair, repairInitialState, Repairs } from '../states/responseJson/Repair';
import { Swords } from '../states/responseJson/Sword';

export const analyseRepair = (
  jsonValue: any, page: string, oldRepair: Repairs, sword: Swords,
): Repairs => {
  // console.log(`analyseRepair ${page}`);
  let repair: Repairs = oldRepair ? { ...oldRepair } : {};
  switch (page) {
    case 'home':
      // repairの残数が返されるため無視する
      repair = oldRepair ? oldRepair : {};
      break;
    case 'repair/repair':
      // 手入開始 swordの修正を受けない
      repair = jsonValue.repair ? jsonValue.repair : oldRepair;
      break;
    case 'repair/complete':
    case 'repair/fast':
      // console.log('Target Slot: ', jsonValue.slot_no);
      // 手入の完了情報
      for (let i: number = 0; i < repairNo; i += 1) {
        if (repair[(i + 1).toString()]) {
          if (repair[(i + 1).toString()].slot_no === jsonValue.slot_no) {
            delete repair[(i + 1).toString()];
            break;
          }
        }
      }
      break;
    default:
      // 上記以外のページでは，repairの内容が数値でない場合oldRepairを返して更新しない
      repair = jsonValue.repair ? jsonValue.repair : oldRepair;
      // swordが更新された場合にその情報を活用
      for (let i: number = 0; i < repairNo; i += 1) {
        if (repair[(i + 1).toString()]) {
          // let targetSwordId: string | number | null = '0';
          const targetSwordId = repair[(i + 1).toString()].sword_serial_id;
          if ((targetSwordId) && (sword[targetSwordId.toString()].status === '0')) {
            delete repair[(i + 1).toString()];
            break;
          }
        }
      }
      /*
      if (jsonValue.repair) {
          repair = jsonValue;
      } else {
          repair = oldRepair;
      }
      */
      break;
  }
  // console.log('repairs: %O', repair);
  return repair;
};
