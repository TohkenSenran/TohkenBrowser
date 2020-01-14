import { getWindowsInfo } from './getWindowsInfo';

export const removeWindow = async (windowId: number): Promise<void> => {
  if (windowId) {
    const windowsInfo: chrome.windows.Window[] = await getWindowsInfo();
    for (const targetWindow of windowsInfo) {
      if ((targetWindow) && (targetWindow.id) && (targetWindow.id === windowId)) {
        // 存在した場合のみ削除
        chrome.windows.remove(windowId);
        break;
      }
    }
  }
};
