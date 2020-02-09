import { handbookInitialState, HandBookState } from '../../handbook/states';
import { Item, Items } from '../states/responseJson/Item';

export const analyseOptions = (jsonValue: any, page: string): void => {
  let items: Items = {};
  switch (page) {
    case 'conquest':
      if (
        (jsonValue) &&
        (jsonValue.season_reward_list) &&
        (jsonValue.season_reward_list.toString() !== '')
      ) {
        // console.log('find empty duty');
        items = jsonValue.season_reward_list;
        // console.log('seasonItems: %O', items);
        chrome.storage.local.get('handbookState', (response) => {
          let handbookState: HandBookState = handbookInitialState;
          if ((response) && (response.handbookState)) {
            handbookState = response.handbookState;
          }
          // 季節報酬を上書き（余計な書き換えを行わないか要注意！）
          handbookState.conquestTable.seasonRewardItems = items;
          // console.log('handbookState, %o', handbookState);
          // console.log('seasonItems, %o', handbookState.conquestTable.season_reward_list);
          chrome.storage.local.set({ handbookState });
        });
      }
      break;
    default:
      break;
  }
};
