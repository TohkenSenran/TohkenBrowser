import { conquestData, resourceId, swordName, itemName } from '../../constants';
import { Item } from '../../content/states/responseJson/Item';
import { ConquestList } from '../states/ConquestList';
import { SwordType, swordTypeName } from '../states/SwordType';

export const conquestConverter = (seasonReword?: { [key: string]: Item[] }): ConquestList[] => {
  const getRequireSwords = (swordType: SwordType): string => {
    let require: string = '';
    Object.entries(swordType).forEach(([key, value]) => {
      require += value ? `${swordTypeName[key]}, ` : '';
    });
    return require = (require === '') ? '-' : require.slice(0, -2);
  };

  const getResource = (rewardItem: Item[], itemId: number): number => {
    let resourceNum: number = 0;
    rewardItem.forEach((value: Item) => {
      // console.log('item %o', value);
      // console.log('index', index);
      // console.log('checkItemType5', (value.item_type.toString() === '5'));
      // console.log('matchId', (value.item_id.toString() === itemId.toString()));
      if ((value.item_type.toString() === '5') &&
        (value.item_id.toString() === itemId.toString())) {
        // console.log('in return', parseInt(value.item_num.toString(), 10));
        resourceNum += parseInt(value.item_num.toString(), 10);
      }
    });
    // console.log('not in return');

    return resourceNum;
  };

  const getItems = (rewardItem: Item[]): string => {
    let items: string = '';
    rewardItem.forEach((value: Item) => {
      // console.log('item %o', value);
      // console.log('index', index);
      // console.log('checkItemType5', (value.item_type.toString() === '5'));
      if (value.item_type.toString() !== '5') {
        // console.log('exist itemName', (itemName[value.item_type][value.item_id] !== undefined));
        items += (itemName[value.item_type][value.item_id] !== undefined) ?
          `${itemName[value.item_type][value.item_id]}x${value.item_num}, ` : `アイテム${value.item_type}-${value.item_id}x${value.item_num}, `;
        // console.log('itemName', items);
      }
    });
    console.log('itemName', items);
    return (items === '') ? '無し' : items.slice(0, -2);
  };

  const data: ConquestList[] = [];
  Object.entries(conquestData).forEach(([key, value]) => {
    console.log('item', getItems(value.reward.normal.item));
    data.push({
      age: value.age,
      destination: value.destination,
      time: value.require.time,
      totalLv: value.require.totalLv,
      requireSwords: getRequireSwords(value.require.swordType),
      swordExp: value.reward.normal.sword_exp,
      userExp: value.reward.normal.user_exp,
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
