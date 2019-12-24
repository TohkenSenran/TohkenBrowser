import { Repairs } from '../states/responseJson/Repair';
import { Sword, swordInitialState, Swords } from '../states/responseJson/Sword';

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
  switch (page) {
    case 'album/list':
    case 'album/checknew':
      // 想定外のswordが供給されるため無視
      sword = oldSword;
      break;
    // 刀剣男子1人のみの情報
    case 'equip/setequip':
    case 'equip/removeequip':
    case 'equip/removeall':
    case 'equip/setitem':
    case 'equip/removeitem':
    case 'home/back':
    case 'composition/compose':
    case 'composition/union':
    case 'item/add_exp':
      const singleSword: Sword = jsonValue.sword ? jsonValue.sword : swordInitialState;
      // console.log(`get single sword: ${singleSword.serial_id}`);
      // console.log('before oldSword obj: %O', sword);
      // console.log(`sword equip: ${sword[singleSword.serial_id].equip_serial_id1}`);
      sword[singleSword.serial_id] = singleSword;
      // console.log(`sword equip: ${sword[singleSword.serial_id].equip_serial_id1}`);
      // console.log('after oldSword obj: %O', sword);
      break;
    // 一部の刀剣男子のみの情報
    case 'party/get_sally_party_info':
    case 'sally':
    case 'sally/eventresume':
    case 'conquest':
    case 'conquest/complete':
    case 'conquest/skyrocket':
    case 'practice':
    case 'practice/offer':
    case 'duty/complete':
    case 'item/sally_recover':
      const partialSword: Swords = jsonValue.sword ? jsonValue.sword : {};
      // console.log('get partial swords: %O', partialSword);
      // console.log(Object.keys(partialSword).length);
      Object.keys(partialSword).forEach(
        (key: string) => {
          // console.log(`partialSword ${partialSword[key].serial_id}`);
          sword[partialSword[key].serial_id] = partialSword[key];
        },
      );
      break;
    case 'repair/repair':
      // 修理時にswordデータを変更
      const tempRepair: Repairs = jsonValue.repair;
      Object.keys(tempRepair).forEach((value: string) => {
        targetSwordId = tempRepair[value].sword_serial_id;
        if (targetSwordId) {
          sword[targetSwordId.toString()].status = '1';
        }
      });
      break;
    case 'repair/complete':
    case 'repair/fast':
      const targetSlot: string | number = jsonValue.slot_no;
      if (targetSlot.toString() in oldRepair) {
        targetSwordId = oldRepair[targetSlot.toString()].sword_serial_id;
        if (targetSwordId) {
          sword[targetSwordId.toString()].status = '0';
        }
      }
      break;
    default:
      // 通常の取得
      sword = jsonValue.sword ? jsonValue.sword : oldSword;
      break;
  }
  // console.log('swords: %O', sword);
  return sword;
};
