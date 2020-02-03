import { conquestData, itemName, resourceId, swordName, swordTypeName } from '../../constants';

import { ConquestListContents } from '../states/ConquestListContents';
import { Item, Items } from '../states/Item';
import { SwordType } from '../states/SwordType';

export const conquestConverter = (seasonReword?: Items): ConquestListContents[] => {
  const getRequireSwords = (swordType: SwordType): string => {
    let require: string = '';
    Object.entries(swordType).forEach(([key, value]) => {
      require += value ? `${swordTypeName[key]},\n` : '';
    });
    return require = (require === '') ? '-' : require.slice(0, -2);
  };

  const getResource = (rewardItem: Item[], itemId: number): string => {
    let resourceNum: number = 0;
    rewardItem.forEach((value: Item) => {
      if ((value.item_type.toString() === '5') &&
        (value.item_id.toString() === itemId.toString())) {
        resourceNum += parseInt(value.item_num.toString(), 10);
      }
    });

    return (resourceNum !== 0) ? `${resourceNum}\n(${Math.floor(resourceNum * 1.5)})` : '-';
  };

  const getItems = (rewardItem: Item[]): string => {
    let items: string = '';
    rewardItem.forEach((value: Item) => {
      if (!((value.item_type.toString() === '5') && (
        (value.item_id.toString() === '2') ||
        (value.item_id.toString() === '3') ||
        (value.item_id.toString() === '4') ||
        (value.item_id.toString() === '5')
      ))) {
        items += (itemName[value.item_type][value.item_id] !== undefined) ?
          `${itemName[value.item_type][value.item_id]} x ${value.item_num},\n` : `アイテム${value.item_type}-${value.item_id} x ${value.item_num},\n`;
      }
    });
    // console.log('itemName', items);
    return (items === '') ? '-' : items.slice(0, -2);
  };

  const data: ConquestListContents[] = [];
  Object.entries(conquestData).forEach(([key, value]) => {
    // console.log('item', getItems(value.reward.normal.item));
    const hour: string = (`0${Math.floor(value.require.time / 60)}`).slice(-2);
    const min: string =
      (`0${value.require.time - Math.floor(value.require.time / 60) * 60}`).slice(-2);
    const userExp: string = `${value.reward.normal.user_exp} (${value.reward.normal.user_exp * 2})`;

    data.push({
      age: value.age,
      destination: value.destination,
      time: `${hour}:${min}`,
      totalLv: value.require.totalLv,
      requireSwords: getRequireSwords(value.require.swordType),
      swordExp: value.reward.normal.sword_exp,
      userExp,
      charcoal: getResource(value.reward.normal.item, resourceId.charcoal),
      steel: getResource(value.reward.normal.item, resourceId.steel),
      coolant: getResource(value.reward.normal.item, resourceId.coolant),
      file: getResource(value.reward.normal.item, resourceId.file),
      item: getItems(value.reward.normal.item),
      greatAdd: getItems(value.reward.greatAdd.item),
    });
  });

  return data;
};
