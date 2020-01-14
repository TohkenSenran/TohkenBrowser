import { popupWindow } from '../../background/models/popupWindow';
import { WindowState } from '../../background/states/WindowState';

export const windowBeforeUnloadEvent = async () => {
  const browserWindow: WindowState = {
    position: { x: window.screenX, y: window.screenY },
    size: { height: window.outerHeight, width: window.outerWidth },
  };
  popupWindow.saveState('browserWindow', browserWindow);
  // console.log(`settingBrowserWindow? ${await setBrowserWindow(browserWindow)}`);
};
