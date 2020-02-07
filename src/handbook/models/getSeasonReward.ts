import { Items } from '../../content/states/responseJson/Item';

export const getSeasonReward: () => Promise<Items> = () =>
  new Promise((resolve: (value: Items) => void) => {
    chrome.storage.local.get('handbookState', (items) => {
      if (
        (items) &&
        (items.handbookState) &&
        (items.handbookState.conquestTable) &&
        (items.handbookState.conquestTable.season_reward_list)
      ) {
        // console.log('in getSeasonReward %o', items);
        resolve(items.handbookState.conquestTable.season_reward_list);
      } else {
        // 狙いのものがなければ空を吐く
        resolve({});
      }
    });
  });
