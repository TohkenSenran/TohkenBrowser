import { requestType } from '../content/models/sendMessageToBackground';

import { gameTitle, gameURL } from '../constants';
import { clickExtensionButton } from './models/clickExtensionButton';
import { getBrowserId } from './models/getBrowserId';
import { muteWindow } from './models/muteWindow';
import { openLinkOnTab } from './models/openLinkOnTab';
import { removeBrowserId } from './models/removeBrowserId';
import { screenshot } from './models/screenshot';

// ContentScriptからのメッセージ取得
let devConnected: boolean = false;
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  switch (request.type) {
    case requestType.muteChange:
      muteWindow(request.payload);
      break;
    case requestType.screenshot:
      screenshot();
      break;
    case requestType.getCurrentWindowId:
      if (sender.tab) {
        sendResponse(sender.tab.windowId);
      }
      break;
    case requestType.getDevConnectState:
      if (sender.tab) {
        // console.log('check devConnect in bg ', devConnected);
        sendResponse(devConnected);
      }
      break;
    case requestType.responseBody:
    // console.log('message from devtool');
    case requestType.openLinkOnTab:
      if (sender.tab) {
        openLinkOnTab(sender.tab.windowId, request.payload);
      }
      break;
    default:
      break;
  }
});

// ブラウザアイコンクリック時の動作
chrome.browserAction.onClicked.addListener(clickExtensionButton);

chrome.contextMenus.create({
  title: '刀剣専覧初期化',
  contexts: ['browser_action'],
  onclick: function () {
    chrome.storage.local.clear(() => {
      alert('刀剣乱舞専用ブラウザをリセットしました。\n＊ゲームへの影響はありません。');
    });
  },
});

// ブラウザウィンドウの削除検出
chrome.windows.onRemoved.addListener(async (windowId: number) => {
  const browserId: number = await getBrowserId();
  if (windowId === browserId) {
    devConnected = false;
    console.log(`remove browser? ${await removeBrowserId()}`);
  }
});

// DevToolsを介してブラウザの通信内容取得
chrome.runtime.onConnect.addListener((port: chrome.runtime.Port) => {
  if (port.name !== 'devtools') return;
  // console.log('Connected with devtools!');
  // console.log('portName in bg :', backgroundPortName);
  port.onMessage.addListener((responseJson) => {
    // Received message from devtools. Do something:
    // console.log('responseBody', responseJson);
    // 接続状態の確認
    if (responseJson.targetPageUrl) {
      // console.log('targetURL in bg ', responseJson.targetPageUrl);
      devConnected = (responseJson.targetPageUrl === gameURL);
    }
    chrome.tabs.query({ title: gameTitle }, (tabs: chrome.tabs.Tab[]) => {
      if ((tabs) && (tabs[0]) && (tabs[0].id)) {
        chrome.tabs.sendMessage(tabs[0].id, responseJson);
      }
    });
  });
  port.onDisconnect.addListener(() => {
    chrome.tabs.query({ title: gameTitle }, (tabs: chrome.tabs.Tab[]) => {
      if ((tabs) && (tabs[0]) && (tabs[0].id)) {
        // DevToolの検出に接続先のurlを使用
        // port切断をDevToolの終了と判断し，url情報をリセット
        // console.log('onDisconnect');
        chrome.tabs.sendMessage(tabs[0].id, { targetPageUrl: 'disconnect' });
        devConnected = false;
      }
    });
  });
});
