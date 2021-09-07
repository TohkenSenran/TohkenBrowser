import moment from 'moment';
import { gameRatio, headerMenuHeight, copyright } from '../../constants';

const saveScreenshot = (dataUrl: string, showCopyright: boolean): void => {
  // const dateFormat = require('dataformat');
  // console.log('inSaveScreenshot');
  const image = new Image();
  image.onload = (): void => {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = gameRatio * image.width;
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(image, 0, -headerMenuHeight);
      if (showCopyright) {
        const textPos: { x: number; y: number } = { x: canvas.width - 6, y: canvas.height - 6 };
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
      link.download = `Tohken_${moment().format('YYYYMMDDHHmmss')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      link.remove();
    }
  };
  image.src = dataUrl;
  // console.log('saved image');
};

export const screenshot = (sender: chrome.runtime.MessageSender, showCopyright: boolean): void => {
  if (sender && sender.tab && sender.tab.windowId) {
    chrome.tabs.captureVisibleTab(sender.tab.windowId, { format: 'png' }, (dataUrl: string) => {
      // console.log('scrennshotting');
      saveScreenshot(dataUrl, showCopyright);
      /*
      if (sender && sender.tab && sender.tab.id) {
        console.log('scrennshotted');
      }
      */
    });
  }
};
