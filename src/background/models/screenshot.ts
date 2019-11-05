import { gameRatio, headerMenuHeight } from '../../constants';

export const screenshot = () => {
    chrome.windows.getCurrent((browserWindow: chrome.windows.Window) => {
        chrome.tabs.captureVisibleTab(browserWindow.id, { format: 'png' }, (dataUrl: string) => {
            saveScreenshot(dataUrl);
        });
    });
};

const saveScreenshot = (dataUrl: string) => {
    const dateFormat = require('dateformat');
    // console.log('inSaveScreenshot');
    const image = new Image();
    image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = gameRatio * image.width;
        const context = canvas.getContext('2d');
        if (context) {
            context.drawImage(image, 0, -headerMenuHeight);
            // save the image
            const link = document.createElement('a');
            link.download = `Tohken_${dateFormat(new Date(), 'yyyymmddHHMMss')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            link.remove();
        }
    };
    image.src = dataUrl;
};
