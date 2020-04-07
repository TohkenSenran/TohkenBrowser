export const getAllWindow: () => Promise<chrome.windows.Window[]> = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new Promise((resolve: (windows: chrome.windows.Window[]) => void) => {
    chrome.windows.getAll((windows) => {
      if (windows) {
        resolve(windows);
      }
    });
  });

export const openLinkOnTab = async (windowId: number, targeUrl: string): Promise<void> => {
  const allWindows: chrome.windows.Window[] = await getAllWindow();
  const otherWindows = allWindows.filter((window) => window.id !== windowId);
  if (otherWindows[0]) {
    chrome.tabs.create({ windowId: otherWindows[0].id, url: targeUrl });
  } else {
    chrome.windows.create({ url: targeUrl });
  }
};
