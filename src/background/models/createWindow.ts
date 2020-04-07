import { WindowState } from '../states/WindowState';

export const createWindow = (
  window: WindowState,
  url: string,
  callback?: (window?: chrome.windows.Window) => void,
): void => {
  chrome.windows.create(
    {
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
