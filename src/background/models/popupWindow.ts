import { initialWindowState, WindowState } from '../states/WindowState';

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

const setBrowserWindow: (key: string, windowState: WindowState) => Promise<void> =
  (key: string, windowState: WindowState) => new Promise(() => {
    const obj = {};
    obj[key] = windowState;
    // console.log('objWS %o', obj);
    chrome.storage.local.set(obj);
  });


// 拡張機能でのウィンドウ作成（storageを使ったサイズ・位置の保存）
export const popupWindow = {
  createWindow: async (
    key: string,
    url: string,
    callback?: (window?: chrome.windows.Window) => void,
  ) => {
    const windowState: WindowState = await getWindowState(key);
    createWindow(
      (windowState !== undefined) ? windowState : initialWindowState,
      url,
      callback,
    );

  },
  saveState: async (key: string, windowState: WindowState) => {
    setBrowserWindow(key, windowState);
  },
};
