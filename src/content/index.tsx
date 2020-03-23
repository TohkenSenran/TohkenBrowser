import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Content from './components/Content';
import store from './store';

import { getWindowId } from '../background/models/getWindowId';

import { checkDevConnect } from './actions/browserSetting';
import { analyseJson } from './models/analyseJson';
import { getCurrentWindowId } from './models/getCurrentWindowId';
import { setWindowTitle } from './models/setWindowTitle';
import { windowBeforeUnloadEvent } from './models/windowBeforeUnloadEvent';
import { windowLoadEvent } from './models/windowLoadEvent';
import { contentRequest } from './states/contentRequest';

// 終了直前の処理
window.onbeforeunload = () => {
  windowBeforeUnloadEvent();
};

// contentが受ける情報の処理
chrome.runtime.onMessage.addListener(({ type, payload }) => {
  // console.log('Get responseJson!');
  // console.log('forgeState before anlyse %O', store.getState().responseJson.forge);
  switch (type) {
    case contentRequest.requestJson:
      analyseJson(payload, (store.getState()).responseJson);
      break;
    case contentRequest.disconnected:
      store.dispatch(checkDevConnect(false));
      break;
    default:
      break;
  }
});
/*
// storage変更情報取得
chrome.storage.onChanged.addListener((changes, areaName) => {
  console.log('onChangeEve %O', changes);
});
*/

const startReactDom = async () => {
  const browserId: number = await getWindowId('browserWindowId');
  // console.log(`browserId from strage ${browserId}`);
  const currentWindowId: number = await getCurrentWindowId();
  if (browserId === currentWindowId) {
    setWindowTitle(document);
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(<Provider store={store}><Content /></Provider>, app);
    // 過去の値を反映
    windowLoadEvent();
  } else {
    alert('専用ブラウザはブラウザアイコンから開いてください');
  }
};

startReactDom();
