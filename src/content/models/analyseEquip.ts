import { Equip, equipInitialState, Equips } from '../states/responseJson/Equip';

export const analyseEquip = (jsonValue: any, page: string, oldEquip: Equips): Equips => {
  // console.log(`analyseEquip ${page}`);
  let equip: Equips = oldEquip ? { ...oldEquip } : {}; // Object.assign({}, oldEquip);
  let singleEquip: Equip = equipInitialState;
  let partialEquip: Equips = {};
  switch (page) {
    // 刀装1個のみの情報
    case 'equip/setequip':
    case 'equip/removeequip':
      singleEquip = jsonValue.equip ?? equipInitialState;
      // console.log(`get single equip: ${singleEquip.serial_id}`);
      // console.log('before oldEquip obj: %O', sword);
      // console.log(`sword equip: ${sword[singleEquip.serial_id].equip_serial_id1}`);
      equip[singleEquip.serial_id] = singleEquip;
      break;
    // 一部の刀装のみの情報
    case 'party/get_sally_party_info':
    case 'sally/eventsally':
    case 'sally/eventresume':
    case 'item/sally_recover':
      // console.log('get partial equips');
      partialEquip = jsonValue.equip ?? {};
      Object.keys(partialEquip).forEach((key: string) => {
        equip[partialEquip[key].serial_id] = partialEquip[key];
      });
      break;
    default:
      equip = jsonValue.equip ?? oldEquip;
  }
  return equip;
};
