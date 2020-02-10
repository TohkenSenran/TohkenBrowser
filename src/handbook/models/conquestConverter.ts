import { conquestData, itemName, resourceId, swordType } from '../../constants';

import { Item, Items } from '../../content/states/responseJson/Item';
import { ConquestTableContents } from '../states/ConquestTableContents';
import { SwordTypeList } from '../states/SwordTypeList';

export const conquestConverter = (seasonReword?: Items): ConquestTableContents[] => {
  const seasonRewardItems: Items = (seasonReword !== undefined) ? seasonReword : { 0: [] };

  const getRequireSwords = (swordTypeList: SwordTypeList): string => {
    let require: string = '';
    Object.entries(swordTypeList).forEach(([key, value]) => {
      require += value ? `${swordType[key]},\n` : '';
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

  const getItemName = (item: Item, isSeason?: boolean): string => {
    if (!(
      (item.item_type.toString() === '5') &&
      (
        (item.item_id.toString() === '2') ||
        (item.item_id.toString() === '3') ||
        (item.item_id.toString() === '4') ||
        (item.item_id.toString() === '5')
      )
    )) {
      const itemNum: number = (item.item_num !== undefined) ?
        parseInt(item.item_num.toString(), 10) : 1;
      return (itemName[item.item_type][item.item_id] !== undefined) ?
        `${itemName[item.item_type][item.item_id]} x ${isSeason ? itemNum * 2 : itemNum},\n` :
        `アイテム${item.item_type}-${item.item_id} x ${isSeason ? itemNum * 2 : itemNum},\n`;
    }
    return '';
  };

  const getItems = (rewardItem: Item[], isSeason?: boolean): string => {
    let items: string = '';
    rewardItem.forEach(
      (value: Item) => { items += getItemName(value); },
    );
    if ((isSeason) && (items !== '')) {
      items = items.slice(0, -2);
      items += '\n(';
      rewardItem.forEach(
        (value: Item) => { items += getItemName(value, isSeason); },
      );
      items = items.slice(0, -2);
      items += ')';
      return items;
    }
    // console.log('itemName', items);
    return (items === '') ? '-' : items.slice(0, -2);

  };

  const data: ConquestTableContents[] = [];
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
      requireSwords: getRequireSwords(value.require.swordTypeList),
      swordExp: value.reward.normal.sword_exp,
      userExp,
      charcoal: getResource(value.reward.normal.item, resourceId.charcoal),
      steel: getResource(value.reward.normal.item, resourceId.steel),
      coolant: getResource(value.reward.normal.item, resourceId.coolant),
      file: getResource(value.reward.normal.item, resourceId.file),
      item: getItems(value.reward.normal.item),
      greatAdd: getItems(value.reward.greatAdd.item),
      seasonReward: getItems(seasonRewardItems[key] ? seasonRewardItems[key] : [], true),
    });
  });

  return data;
};
