import { popupWindow } from '../../background/models/popupWindow';
import { requestType } from '../../background/states/requestType';
import { WindowState } from '../../background/states/WindowState';
import { browserWindow } from '../../constants';
import { sendMessageToBackground } from './sendMessageToBackground';

export const windowBeforeUnloadEvent = async () => {
  const browserWindowState: WindowState = {
    position: { x: window.screenX, y: window.screenY },
    size: { height: window.outerHeight, width: window.outerWidth },
  };
  popupWindow.saveState(browserWindow, browserWindowState);

  // 便利帳を一緒に消す
  sendMessageToBackground(requestType.closeHandbookWindow);
  // console.log(`settingBrowserWindow? ${await setBrowserWindow(browserWindow)}`);
};
