import { gameRatio, headerMenuHeight } from '../../constants';

const saveScreenshot = (dataUrl: string, addCopyright: boolean) => {
  const dateFormat = require('dataformat');
  // console.log('inSaveScreenshot');
  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = gameRatio * image.width;
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(image, 0, -headerMenuHeight);
      if (addCopyright) {
        const copyright = '©2015-2020 DMM GAMES/Nitroplus';
        const textPos: { x: number, y: number } = { x: canvas.width - 6, y: canvas.height - 6 };
        context.font = 'bold 16px serif';
        context.strokeStyle = '#fff';
        context.lineWidth = 3;
        context.lineJoin = 'round';
        context.textAlign = 'end';
        context.strokeText(copyright, textPos.x, textPos.y);
        context.fillText(copyright, textPos.x, textPos.y);
      }
      // save the image
      const link = document.createElement('a');
      link.download = `Tohken_${dateFormat(new Date(), 'yyyymmddHHMMss')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      link.remove();
    }
  };
  image.src = dataUrl;
  // console.log('saved image');
};

export const screenshot = (sender: chrome.runtime.MessageSender, addCopyright: boolean) => {
  if ((sender) && (sender.tab) && (sender.tab.windowId)) {
    chrome.tabs.captureVisibleTab(
      sender.tab.windowId,
      { format: 'png' },
      (dataUrl: string) => {
        // console.log('scrennshotting');
        saveScreenshot(dataUrl, addCopyright);
        if ((sender) && (sender.tab) && (sender.tab.id)) {
          // console.log('scrennshotted');
          // sendMessageToWindow(sender.tab.id, contentRequest.screenshot);
        }
      },
    );
  }
};
