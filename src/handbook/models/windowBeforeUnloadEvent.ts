import { popupWindow } from '../../background/models/popupWindow';
import { WindowState } from '../../background/states/WindowState';

export const windowBeforeUnloadEvent = async () => {
  const handbookWindow: WindowState = {
    position: { x: window.screenX, y: window.screenY },
    size: { height: window.outerHeight, width: window.outerWidth },
  };

  popupWindow.saveState('handbookWindow', handbookWindow);

  // await setHandbookWindow(handbookWindow);
  // console.log(`settinghandbookWindow? ${await sethandbookWindow(handbookWindow)}`);
};

export const setHandbookWindow: (handbookWindow: WindowState) => Promise<boolean> =
  (handbookWindow: WindowState) =>
    new Promise((resolve: (value: boolean) => void) => {
      chrome.storage.local.set({ handbookWindow }, () => {
        resolve(true);
      });
    });
