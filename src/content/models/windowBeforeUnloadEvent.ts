import { popupWindow } from '../../background/models/popupWindow';
import { BrowserWindow } from '../states/BrowserWindowState';

export const windowBeforeUnloadEvent = async () => {
  const browserWindow: BrowserWindow = {
    position: { x: window.screenX, y: window.screenY },
    size: { height: window.outerHeight, width: window.outerWidth },
  };
  popupWindow.saveState('browserWindow', browserWindow);
  // console.log(`settingBrowserWindow? ${await setBrowserWindow(browserWindow)}`);
};
