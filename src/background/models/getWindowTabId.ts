export const getWindowTabId: (title: string) => Promise<number> = (title: string) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new Promise((resolve: (value: number) => void) => {
    chrome.tabs.query({ title }, (tabs: chrome.tabs.Tab[]) => {
      if (tabs && tabs[0] && tabs[0].id) {
        resolve(tabs[0].id);
      }
    });
  });
