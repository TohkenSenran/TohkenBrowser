import { BrowserWindow } from '../states/BrowserWindowState';

export const windowBeforeUnloadEvent = async () => {
    const browserWindow: BrowserWindow = {
        position: { x: window.screenX, y: window.screenY },
        size: { height: window.outerHeight, width: window.outerWidth },
    };
    console.log(`settingBrowserWindow? ${await setBrowserWindow(browserWindow)}`);
};

export const setBrowserWindow: (browserWindow: BrowserWindow) => Promise<boolean> =
    (browserWindow: BrowserWindow) =>
        new Promise((resolve: (value: boolean) => void) => {
            chrome.storage.local.set({ browserWindow }, () => {
                resolve(true);
            });
        });
