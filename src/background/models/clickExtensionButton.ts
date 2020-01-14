import { gameURL } from '../../constants';
import { popupWindow } from './popupWindow';

export const clickExtensionButton = async () => {
  popupWindow.createWindow(
    'browserWindow',
    gameURL,
  );
};
