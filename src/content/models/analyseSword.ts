import { Repairs } from '../states/responseJson/Repair';
import { Sword, swordInitialState, Swords } from '../states/responseJson/Sword';
import { requestConverter } from './requestConverter';
import { RequestProps } from '../states/responseJson/RequestProps';

export const analyseSword = (
  jsonValue: any,
  page: string,
  oldSword: Swords,
  oldRepair: Repairs,
): Swords => {
  // console.log(`analyseSword ${page}`);
  // イミュータブルな操作が必要
  let sword: Swords = oldSword ? { ...oldSword } : {}; // Object.assign({}, oldSword);
  let targetSwordId: string | number | null = '0';
  let singleSword: Sword = swordInitialState;
  let partialSword: Swords = {};
  let tempRepair: Repairs = {};
  let targetSlot = '0';

  const requestProps: RequestProps = requestConverter(jsonValue.requestData);

  switch (page) {
    case 'album/list':
    case 'album/checknew':
      // 想定外のswordが供給されるため無視
      sword = oldSword;
      break;
    // 刀剣男士1人のみの情報
    case 'equip/setequip':
    case 'equip/removeequip':
    case 'equip/removeall':
    case 'equip/setitem':
    case 'equip/removeitem':
    case 'home/back':
    case 'home/leave': // 未確認
    case 'composition/compose':
    case 'composition/union':
    case 'item/add_exp':
      singleSword = jsonValue.sword ?? swordInitialState;
      // console.log(`get single sword: ${singleSword.serial_id}`);
      // console.log('before oldSword obj: %O', sword);
      // console.log(`sword equip: ${sword[singleSword.serial_id].equip_serial_id1}`);
      sword[singleSword.serial_id] = singleSword;
      // console.log(`sword equip: ${sword[singleSword.serial_id].equip_serial_id1}`);
      // console.log('after oldSword obj: %O', sword);
      break;
    // 一部の刀剣男士のみの情報
    case 'repair':
    case 'party/get_sally_party_info':
    case 'party/get_wait_party_info':
    case 'sally':
    case 'sally/eventresume':
    case 'conquest':
    case 'conquest/complete':
    case 'conquest/skyrocket':
    case 'practice':
    case 'practice/offer':
    case 'duty/complete':
    case 'item/sally_recover':
      partialSword = jsonValue.sword ?? {};
      // console.log('get partial swords: %O', partialSword);
      // console.log(Object.keys(partialSword).length);
      Object.keys(partialSword).forEach((key: string) => {
        // console.log(`partialSword ${partialSword[key].serial_id}`);
        sword[partialSword[key].serial_id] = partialSword[key];
      });
      break;
    case 'repair/repair':
      // 修理時にswordデータを変更
      tempRepair = jsonValue.repair;
      Object.keys(tempRepair).forEach((value: string) => {
        targetSwordId = tempRepair[value].sword_serial_id;
        if (targetSwordId && targetSwordId in sword) {
          sword[targetSwordId].status = '1';
        }
      });
      break;
    case 'repair/complete':
    case 'repair/fast':
      targetSlot = jsonValue.slot_no.toString();
      if (targetSlot in oldRepair) {
        targetSwordId = oldRepair[targetSlot].sword_serial_id;
        if (targetSwordId && targetSwordId in sword) {
          sword[targetSwordId].status = '0';
        }
      }
      break;
    case 'sword/protect':
      // 刀剣男士の保護状態の変更
      // console.log('protect check');
      if (requestProps.serialId in sword) {
        sword[requestProps.serialId].protect =
          sword[requestProps.serialId].protect.toString() === '0' ? '1' : '0';
      }
      break;
    default:
      // 通常の取得
      sword = jsonValue.sword ?? oldSword;
      break;
  }
  // console.log('swords: %O', sword);
  return sword;
};
