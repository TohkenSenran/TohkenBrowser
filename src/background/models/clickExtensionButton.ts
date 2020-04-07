import { gameURL, windowName } from '../../constants';
import { popupWindow } from './popupWindow';

export const clickExtensionButton = async (): Promise<void> => {
  popupWindow.createWindow(windowName.browserWindow, gameURL);
};
