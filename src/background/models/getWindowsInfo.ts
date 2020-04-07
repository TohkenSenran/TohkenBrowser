export const getWindowsInfo: () => Promise<chrome.windows.Window[]> = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new Promise((resolve: (value: chrome.windows.Window[]) => void) => {
    chrome.windows.getAll((windows: chrome.windows.Window[]) => {
      resolve(windows);
    });
  });
