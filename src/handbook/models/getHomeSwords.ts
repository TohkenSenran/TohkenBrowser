import { Swords } from '../../content/states/responseJson/Sword';

export const getHomeSwords: () => Promise<Swords> = () =>
  new Promise((resolve: (value: Swords) => void) => {
    chrome.storage.local.get('rootState', (items) => {
      if (
        (items) &&
        (items.rootState) &&
        (items.rootState.responseJson) &&
        (items.rootState.responseJson.sword)
      ) {
        // console.log('in getSeasonReward %o', items);
        resolve(items.rootState.responseJson.sword);
      } else {
        // 狙いのものがなければ空を吐く
        resolve({});
      }
    });
  });
