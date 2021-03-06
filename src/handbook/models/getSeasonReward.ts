import { SeasonItem } from '../../content/states/responseJson/SeasonItem';

export const getSeasonReward: () => Promise<SeasonItem[]> = () =>
  new Promise((resolve: (value: SeasonItem[]) => void) => {
    chrome.storage.local.get('handbookState', (items) => {
      if (
        items &&
        items.handbookState &&
        items.handbookState.conquestTable &&
        items.handbookState.conquestTable.seasonRewardItems
      ) {
        // console.log('in getSeasonReward %o', items);
        resolve(items.handbookState.conquestTable.seasonRewardItems);
      } else {
        // 狙いのものがなければ空を吐く
        resolve([]);
      }
    });
  });
