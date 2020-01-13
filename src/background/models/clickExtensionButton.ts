import { gameURL } from '../../constants';
import { getBrowserId } from './getBrowserId';
import { getWindowsInfo } from './getWindowsInfo';
import { popupWindow } from './popupWindow';

export const clickExtensionButton = async () => {
  // strorageからbrowserWindowの有無をチェック
  const browserId: number = await getBrowserId();
  if (browserId) {
    // stroageに登録されたIdが存在するかをチェック
    const windowsInfo: chrome.windows.Window[] = await getWindowsInfo();
    let checkBrowser: boolean = false;
    for (const targetWindow of windowsInfo) {
      if ((targetWindow) && (targetWindow.id) && (targetWindow.id === browserId)) {
        checkBrowser = true;
        break;
      }
    }
    if (checkBrowser) {
      chrome.windows.update(browserId, { focused: true });
      return;
    }
  }
  popupWindow.createWindow(
    'browserWindow',
    gameURL,
    (newWindow: chrome.windows.Window) => {
      if ((newWindow) && (newWindow.tabs)) {
        chrome.storage.local.set({ browserId: newWindow.id });
      }
    },
  );
};
