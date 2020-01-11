import { gameURL } from '../../constants';
import { BrowserWindow, initialBrowserWindow } from '../../content/states/BrowserWindowState';

export const createBrowser = () => {
  try {
    // storageからWindow形状の情報をロード
    // chrome.storageの容量チェック
    const key: string = 'browserWindow';
    chrome.storage.local.get(key, (items) => {
      const keys = Object.keys(items);
      chrome.storage.local.getBytesInUse(keys, (bytesInUse: number) => {
        // console.log(`getByutesInUse ${bytesInUse}`);
        let browserWindow: BrowserWindow = initialBrowserWindow;
        if (bytesInUse !== 0) {
          chrome.storage.local.get(key, (response) => {
            browserWindow = response.browserWindow;
            makeWindow(browserWindow);
          });
        } else {
          // 設定がない場合にロード
          makeWindow(browserWindow);
        }
      });
    });

    const makeWindow = (browserWindow: BrowserWindow): void => {
      chrome.windows.create({
        focused: true,
        type: 'popup',
        url: gameURL,
        width: browserWindow.size.width,
        height: browserWindow.size.height,
        top: browserWindow.position.y,
        left: browserWindow.position.x,
      }, (newWindow: chrome.windows.Window) => {
        if ((newWindow) && (newWindow.tabs)) {
          chrome.storage.local.set({ browserId: newWindow.id });
        }
      });
    };
  } catch (err) {
    console.error(err);
  }
};
