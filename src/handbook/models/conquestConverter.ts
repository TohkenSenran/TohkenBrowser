import { conquestData, itemName, resourceId, swordType } from '../../constants';

import { Item, Items } from '../../content/states/responseJson/Item';
import { ConquestTableContents } from '../states/ConquestTableContents';
import { SwordTypeList } from '../states/SwordTypeList';
import { SeasonItem } from '../../content/states/responseJson/SeasonItem';

export const conquestConverter = (seasonReword?: SeasonItem[]): ConquestTableContents[] => {
  const seasonRewardItems: SeasonItem[] = typeof seasonReword !== 'undefined' ? seasonReword : [];
  // SeasonItemを処理しやすいように配列し直し
  const convertItems: Items = {};
  seasonRewardItems.forEach((value) => {
    convertItems[value.field_id] = [
      {
        item_type: value.item_type,
        item_id: value.item_id,
        item_num: value.item_num,
      },
    ];
  });
  const getRequireSwords = (swordTypeList: SwordTypeList): string => {
    let require = '';
    Object.entries(swordTypeList).forEach(([key, value]) => {
      require += value ? `${swordType[key as keyof typeof swordType]},\n` : '';
    });
    return (require = require === '' ? '-' : require.slice(0, -2));
  };

  const getResource = (rewardItem: Item[], itemId: number): string => {
    let resourceNum = 0;
    rewardItem.forEach((value: Item) => {
      if (value.item_type.toString() === '5' && value.item_id.toString() === itemId.toString()) {
        resourceNum += parseInt(value.item_num.toString(), 10);
      }
    });

    return resourceNum !== 0 ? `${resourceNum}\n(${Math.floor(resourceNum * 1.5)})` : '-';
  };

  const getItemName = (item: Item, isSeason?: boolean): string => {
    if (
      !(
        item.item_type.toString() === '5' &&
        (item.item_id.toString() === '2' ||
          item.item_id.toString() === '3' ||
          item.item_id.toString() === '4' ||
          item.item_id.toString() === '5')
      )
    ) {
      const itemNum: number =
        item.item_num !== undefined ? parseInt(item.item_num.toString(), 10) : 1;
      return itemName[item.item_type][item.item_id] !== undefined
        ? `${itemName[item.item_type][item.item_id]} x ${isSeason ? itemNum * 2 : itemNum},\n`
        : `アイテム${item.item_type}-${item.item_id} x ${isSeason ? itemNum * 2 : itemNum},\n`;
    }
    return '';
  };

  const getItems = (rewardItem: Item[], isSeason?: boolean): string => {
    let items = '';
    rewardItem.forEach((value: Item) => {
      items += getItemName(value);
    });
    if (isSeason && items !== '') {
      items = items.slice(0, -2);
      items += '\n(';
      rewardItem.forEach((value: Item) => {
        items += getItemName(value, isSeason);
      });
      items = items.slice(0, -2);
      items += ')';
      return items;
    }
    // console.log('itemName', items);
    return items === '' ? '-' : items.slice(0, -2);
  };

  const data: ConquestTableContents[] = [];
  Object.entries(conquestData).forEach(([key, value]) => {
    if (key !== '0') {
      // console.log('item', getItems(value.reward.normal.item));
      const hour: string = `0${Math.floor(value.require.time / 60)}`.slice(-2);
      const min: string = `0${value.require.time - Math.floor(value.require.time / 60) * 60}`.slice(
        -2,
      );
      const userExp = `${value.reward.normal.user_exp} (${value.reward.normal.user_exp * 2})`;

      // console.log('in conquestConverter %o', seasonRewardItems);
      // console.log('Target seasonItem %o', convertItems[key]);

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
        seasonReward: getItems(convertItems[key] ? convertItems[key] : [], true),
      });
    }
  });

  return data;
};
