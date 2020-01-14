export const removeWindowId: (key: string) => Promise<void> = (key: string) =>
  new Promise((resolve: () => void) => { chrome.storage.local.remove(key, () => { resolve(); }); });
