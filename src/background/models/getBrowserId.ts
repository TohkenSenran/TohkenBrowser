export const getBrowserId: () => Promise<number> = () =>
  new Promise((resolve: (value: number) => void) => {
    chrome.storage.local.get((items) => {
      resolve(items.browserId);
    });
  });
