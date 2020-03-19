import { initialWindowState, WindowState } from '../states/WindowState';
import { createWindow } from './createWindow';
import { getWindowId } from './getWindowId';
import { getWindowsInfo } from './getWindowsInfo';
import { getWindowState } from './getWindowState';

// 拡張機能でのウィンドウ作成（storageを使ったサイズ・位置の保存）
export const popupWindow = {
  createWindow: async (
    windowName: string,
    loadUrl: string,
  ) => {
    const windowState: WindowState = await getWindowState(windowName);
    // 重複起動チェック
    const windowId: number = await getWindowId(`${windowName}Id`);
    if (windowId) {
      // 重複起動チェック
      // stroageに登録されたidが存在するかをチェック
      const windowsInfo: chrome.windows.Window[] = await getWindowsInfo();
      let checkWindow: boolean = false;
      for (const targetWindow of windowsInfo) {
        if ((targetWindow) && (targetWindow.id) && (targetWindow.id === windowId)) {
          checkWindow = true;
          break;
        }
      }
      // 存在する場合，ウィンドウを作らずアクティブにする
      if (checkWindow) {
        chrome.windows.update(windowId, { focused: true });
        return;
      }
    }
    // idが未定義 or 存在しない場合，ウィンドウを作成
    createWindow(
      (windowState !== undefined) ? windowState : initialWindowState,
      loadUrl,
      (newWindow: chrome.windows.Window | undefined) => {
        if ((newWindow) && (newWindow.tabs)) {
          chrome.storage.local.set({ [`${windowName}Id`]: newWindow.id });
        }
      },
    );
  },

  saveState: async (windowName: string, windowState: WindowState) => {
    const setBrowserWindow: (key: string, window: WindowState) => Promise<void> =
      (key: string, window: WindowState) => new Promise(() => {
        // console.log('objWS %o', obj);
        chrome.storage.local.set({ [key]: window });
      });

    setBrowserWindow(windowName, windowState);
  },
};
