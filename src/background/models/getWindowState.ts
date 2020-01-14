import { WindowState } from '../states/WindowState';

export const getWindowState: (key: string) => Promise<WindowState> = (key: string) =>
  new Promise((resolve: (value: WindowState) => void) => {
    chrome.storage.local.get((items) => {
      resolve(items[key]);
    });
  });
