import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import { Items } from '../content/states/responseJson/Item';
import { Swords } from '../content/states/responseJson/Sword';
import { setSeasonItems } from './actions/conquestTable';
import { setHomeSwords } from './actions/homeSwordsTable';
import Content from './components/Content';
import { getHomeSwords } from './models/getHomeSwords';
import { getSeasonReward } from './models/getSeasonReward';
import { setWindowTitle } from './models/setWindowTitle';
import { windowBeforeUnloadEvent } from './models/windowBeforeUnloadEvent';
import { windowLoadEvent } from './models/windowLoadEvent';

// 終了直前の処理
window.onbeforeunload = () => {
  windowBeforeUnloadEvent();
};

// storageの変更取得
chrome.storage.onChanged.addListener((changes, areaName) => {
  // console.log('changed Obj %o', changes);
  if ((changes.handbookState) && (changes.handbookState.newValue)) {
    // console.log('changed Obj %o', changes.handbookState.newValue);
    if (
      (changes.handbookState.newValue.conquestTable) &&
      (changes.handbookState.newValue.conquestTable.seasonRewardItems)
    ) {
      const newSeasonRewardItems: Items =
        changes.handbookState.newValue.conquestTable.seasonRewardItems;
      // console.log('newSRI %o', newSeasonRewardItems);
      const oldSeasonRewardItems: Items =
        (
          (changes.handbookState.oldValue) &&
          (changes.handbookState.oldValue.conquestTable) &&
          (changes.handbookState.oldValue.conquestTable.seasonRewardItems)
        ) ? changes.handbookState.oldValue.conquestTable.seasonRewardItems : {};
      // console.log('oldSRI %o', oldSeasonRewardItems);
      // 配列はサーバー生成なのでstringifyでのdeep equalで十分
      if (JSON.stringify(newSeasonRewardItems) !== JSON.stringify(oldSeasonRewardItems)) {
        console.log('seasonItems更新');
        store.dispatch(setSeasonItems(newSeasonRewardItems ? newSeasonRewardItems : {}));
      }
    }
  }
  if ((changes.rootState) && (changes.rootState.newValue)) {
    // console.log('in changes.root');
    if (
      (changes.rootState.newValue.responseJson) &&
      (changes.rootState.newValue.responseJson.sword)
    ) {
      // console.log('in changes.rootState.newValue.responseJson');
      const newHomeSwords: Swords = changes.rootState.newValue.responseJson.sword;
      const oldHomeSwords: Swords =
        (
          (changes.rootState.oldValue) &&
          (changes.rootState.oldValue.responseJson) &&
          (changes.rootState.oldValue.responseJson.sword)
        ) ? changes.rootState.oldValue.responseJson.sword : {};
      // console.log('changed Obj %o', newHomeSwords);
      // console.log('newHomeSwords', JSON.stringify(newHomeSwords));
      // console.log('oldHomeSwords', JSON.stringify(oldHomeSwords));

      if (JSON.stringify(newHomeSwords) !== JSON.stringify(oldHomeSwords)) {
        console.log('homeSwords更新');
        store.dispatch(setHomeSwords(newHomeSwords ? newHomeSwords : {}));
      }
    }
  }
});

const startReactDom = async () => {
  /*
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
  */
  setWindowTitle(document);
  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(<Provider store={store}><Content /></Provider>, app);
  // 過去の値を反映
  windowLoadEvent();
};

startReactDom();
