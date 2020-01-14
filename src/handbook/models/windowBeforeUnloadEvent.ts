import { popupWindow } from '../../background/models/popupWindow';
import { WindowState } from '../../background/states/WindowState';
import { handbookWindow } from '../../constants';

export const windowBeforeUnloadEvent = async () => {
  const handbookWindowState: WindowState = {
    position: { x: window.screenX, y: window.screenY },
    size: { height: window.outerHeight, width: window.outerWidth },
  };

  popupWindow.saveState(handbookWindow, handbookWindowState);

  // await setHandbookWindow(handbookWindow);
  // console.log(`settinghandbookWindow? ${await sethandbookWindow(handbookWindow)}`);
};
