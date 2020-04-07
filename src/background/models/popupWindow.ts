/* eslint-disable implicit-arrow-linebreak */
import { initialWindowState, WindowState } from '../states/WindowState';
import { createWindow } from './createWindow';
import { getWindowId } from './getWindowId';
import { getWindowsInfo } from './getWindowsInfo';
import { getWindowState } from './getWindowState';
import { windowName } from '../../constants';
import { StorageState } from '../states/StorageState';

// 拡張機能でのウィンドウ作成（storageを使ったサイズ・位置の保存）
export const popupWindow = {
  createWindow: async (name: windowName, loadUrl: string): Promise<void> => {
    const windowState: WindowState = await getWindowState(name);
    // 重複起動チェック
    const windowId: number = await getWindowId(`${name}Id` as keyof StorageState);
    if (windowId) {
      // 重複起動チェック
      // stroageに登録されたidが存在するかをチェック
      const windowsInfo: chrome.windows.Window[] = await getWindowsInfo();
      const checkWindow = windowsInfo.some((window) => window.id === windowId);

      // 存在する場合，ウィンドウを作らずアクティブにする
      if (checkWindow) {
        chrome.windows.update(windowId, { focused: true });
        return;
      }
    }
    // idが未定義 or 存在しない場合，ウィンドウを作成
    createWindow(
      windowState !== undefined ? windowState : initialWindowState,
      loadUrl,
      (newWindow: chrome.windows.Window | undefined) => {
        if (newWindow && newWindow.tabs) {
          chrome.storage.local.set({ [`${name}Id`]: newWindow.id });
        }
      },
    );
  },

  saveState: async (name: windowName, windowState: WindowState): Promise<void> => {
    const setBrowserWindow: (key: string, window: WindowState) => Promise<void> = (
      key: string,
      window: WindowState,
    ) =>
      new Promise(() => {
        chrome.storage.local.set({ [key]: window });
      });

    setBrowserWindow(name, windowState);
  },
};
