export const getWindowsInfo: () => Promise<chrome.windows.Window[]> = () =>
  new Promise((resolve: (value: chrome.windows.Window[]) => void) => {
    chrome.windows.getAll((windows: chrome.windows.Window[]) => { resolve(windows); });
  });
