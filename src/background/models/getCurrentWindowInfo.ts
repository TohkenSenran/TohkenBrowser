export const getCurrentWindoInfo: () => Promise<chrome.windows.Window> = () =>
    new Promise((resolve: (value: chrome.windows.Window) => void) => {
        chrome.windows.getCurrent((window: chrome.windows.Window) => {
            resolve(window);
        });
    });
