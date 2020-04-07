import { browser } from 'webextension-polyfill-ts';

// 要検討：asyncをこの中でやってよいのでは？
export const getCurrentWindoInfo = (): Promise<chrome.windows.Window> => {
  const window = browser.windows.getCurrent() as Promise<chrome.windows.Window>;
  return window;
};

/*
const getCurrentWindoInfo: () => Promise<chrome.windows.Window> = () =>
  new Promise((resolve: (value: chrome.windows.Window) => void) => {
    chrome.windows.getCurrent((window: chrome.windows.Window) => {
      resolve(window);
    });
  });
*/
