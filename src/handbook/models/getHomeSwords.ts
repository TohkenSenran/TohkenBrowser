import { Swords } from '../../content/states/responseJson/Sword';

export const getHomeSwords: () => Promise<Swords> = () =>
  new Promise((resolve: (value: Swords) => void) => {
    chrome.storage.local.get('handbookState', (items) => {
      if (
        (items) &&
        (items.handbookState) &&
        (items.handbookState.homeSwordsTable) &&
        (items.handbookState.homeSwordsTable.homeSwords)
      ) {
        // console.log('in getSeasonReward %o', items);
        resolve(items.handbookState.homeSwordsTable.homeSwords);
      } else {
        // 狙いのものがなければ空を吐く
        resolve({});
      }
    });
  });
