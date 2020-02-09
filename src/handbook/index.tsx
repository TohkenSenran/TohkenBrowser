import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import { Items } from '../content/states/responseJson/Item';
import { Swords } from '../content/states/responseJson/Sword';
import { setSeasonItems } from './actions/conquestTable';
import { setHomeSwords } from './actions/homeSwordsTable';
import Content from './components/Content';
import { getSeasonReward } from './models/getSeasonReward';
import { setWindowTitle } from './models/setWindowTitle';
import { windowBeforeUnloadEvent } from './models/windowBeforeUnloadEvent';
import { windowLoadEvent } from './models/windowLoadEvent';
import { getHomeSwords } from './models/getHomeSwords';


// 終了直前の処理
window.onbeforeunload = () => {
  windowBeforeUnloadEvent();
};

// storageの変更取得
chrome.storage.onChanged.addListener((changes, areaName) => {
  // console.log('changed Obj %o', changes);
  if ((changes.handbookState) && (changes.handbookState.newValue)) {
    // console.log('changed Obj %o', changes.handbookState.newValue);
    const newSeasonRewardItems: Items =
      changes.handbookState.newValue.conquestTable.seasonRewardItems;
    store.dispatch(setSeasonItems(newSeasonRewardItems ? newSeasonRewardItems : {}));
  } else if ((changes.rootState) && (changes.rootState.newValue)) {
    const newHomeSwords: Swords = changes.rootState.newValue.responseJson.sword;
    // console.log('changed Obj %o', newHomeSwords);
    store.dispatch(setHomeSwords(newHomeSwords ? newHomeSwords : {}));
  }
});

const startReactDom = async () => {
  const seasonRewardItems: Items = await getSeasonReward();
  // console.log('in startReactDom %o', seasonItems);
  if (seasonRewardItems) {
    // console.log('on dispatch %o', seasonItems);
    store.dispatch(setSeasonItems(seasonRewardItems));
  }
  const homeSwords: Swords = await getHomeSwords();
  if (homeSwords) {
    store.dispatch(setHomeSwords(homeSwords));
  }
  setWindowTitle(document);
  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(<Provider store={store}><Content /></Provider>, app);
  // 過去の値を反映
  windowLoadEvent();
};

startReactDom();
