import { Items } from '../../content/states/responseJson/Item';

export const getSeasonReward: () => Promise<Items> = () =>
  new Promise((resolve: (value: Items) => void) => {
    chrome.storage.local.get('handbookState', (items) => {
      if (
        (items) &&
        (items.handbookState) &&
        (items.handbookState.conquestTable) &&
        (items.handbookState.conquestTable.seasonRewardItems)
      ) {
        // console.log('in getSeasonReward %o', items);
        resolve(items.handbookState.conquestTable.seasonRewardItems);
      } else {
        // 狙いのものがなければ空を吐く
        resolve({});
      }
    });
  });
