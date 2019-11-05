import { gameTitle } from '../../constants';

// タイトル・faviconの変更
export const setWindowTitle = (document: Document) => {
    const faviconlink: HTMLLinkElement | null =
        document.querySelector("link[rel*='icon']") || document.createElement('link');
    if (faviconlink) {
        // console.log(`${chrome.extension.getURL('icon/TohkenBrowser.ico')}`);
        faviconlink.type = 'image/x-icon';
        faviconlink.rel = 'shortcut icon';
        faviconlink.href = chrome.extension.getURL('icon/TohkenBrowser.ico');
        document.getElementsByTagName('head')[0].appendChild(faviconlink);
    }
    document.title = gameTitle;
};
