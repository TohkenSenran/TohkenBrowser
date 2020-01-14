export const getWindowId: (key: string) => Promise<number> = (key: string) =>
  new Promise((resolve: (value: number) => void) => {
    chrome.storage.local.get((items) => { resolve(items[key]); });
  });
