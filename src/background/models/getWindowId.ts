// 要検討：asyncをこの中でやってよいのでは？
export const getWindowId = (key: string): Promise<number> =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new Promise((resolve: (value: number) => void) => {
    chrome.storage.local.get((items) => {
      resolve(items[key]);
    });
  });
/*
export const getWindowId: (key: string) => Promise<number> = (key: string) =>
  new Promise((resolve: (value: number) => void) => {
    chrome.storage.local.get((items) => { resolve(items[key]); });
  });
*/
