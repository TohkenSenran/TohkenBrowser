import { getWindowsInfo } from './getWindowsInfo';

export const removeWindow = async (windowId: number): Promise<void> => {
  if (windowId) {
    const windowsInfo: chrome.windows.Window[] = await getWindowsInfo();
    windowsInfo.forEach((window) => {
      if (window.id === windowId) {
        // 存在した場合のみ削除
        chrome.windows.remove(windowId);
      }
    });
  }
};
