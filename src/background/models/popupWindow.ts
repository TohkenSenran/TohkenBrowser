import { initialWindowState, WindowState } from '../states/WindowState';

// 拡張機能でのウィンドウ作成（storageを使ったサイズ・位置の保存）
export const popupWindow = {
  createWindow: async (
    windowName: string,
    loadUrl: string,
    callback?: (window?: chrome.windows.Window) => void,
  ) => {
    const getWindowState: (key: string) => Promise<WindowState> = (key: string) =>
      new Promise((resolve: (value: WindowState) => void) => {
        chrome.storage.local.get((items) => {
          resolve(items[key]);
        });
      });

    const createWindow = (
      window: WindowState,
      url: string,
      callback?: (window?: chrome.windows.Window) => void,
    ): void => {
      chrome.windows.create({
        focused: true,
        type: 'popup',
        url,
        width: window.size.width,
        height: window.size.height,
        top: window.position.y,
        left: window.position.x,
      },
        callback,
      );
    };

    const windowState: WindowState = await getWindowState(windowName);
    createWindow(
      (windowState !== undefined) ? windowState : initialWindowState,
      loadUrl,
      callback,
    );
  },
  saveState: async (windowName: string, windowState: WindowState) => {
    const setBrowserWindow: (key: string, window: WindowState) => Promise<void> =
      (key: string, window: WindowState) => new Promise(() => {
        const obj = {};
        obj[key] = window;
        // console.log('objWS %o', obj);
        chrome.storage.local.set(obj);
      });

    setBrowserWindow(windowName, windowState);
  },
};
