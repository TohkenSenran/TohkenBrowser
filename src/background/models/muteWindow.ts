import { gameTitle } from '../../constants';

export const muteWindow = (muted: boolean): void => {
  chrome.tabs.query({ title: gameTitle }, (tabs: chrome.tabs.Tab[]) => {
    if (tabs[0].id != null) {
      chrome.tabs.update(tabs[0].id, { muted });
    }
  });
  // console.log("request " + request);
};
