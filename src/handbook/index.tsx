import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { browser } from 'webextension-polyfill-ts';

import { rootInitialState, RootState } from '../content/states';
import { toneMode } from '../constants';
import { browserSettingInitialState } from '../content/states/BrowserSettingState';
import { SeasonItem } from '../content/states/responseJson/SeasonItem';
import { store } from './store';
import { Swords } from '../content/states/responseJson/Sword';
import { setSeasonItems } from './actions/conquestTable';
import { setHomeSwords } from './actions/homeSwordsTable';
import { Content } from './components/Content';
import { setWindowTitle } from './models/setWindowTitle';
import { windowBeforeUnloadEvent } from './models/windowBeforeUnloadEvent';
import { windowLoadEvent } from './models/windowLoadEvent';
import { HistoryTableContents } from './states/HistoryTableContents';
import { pushHistory, removeHistory } from './actions/historyTable';
import { selectToneMode } from './actions/tabMenu';

// 終了直前の処理
window.onbeforeunload = (): void => {
  windowBeforeUnloadEvent();
};

// storageの変更取得
chrome.storage.onChanged.addListener(async (changes) => {
  // console.log('changes %o', changes);
  // console.log('changeKeysLength ', Object.keys(changes).length);
  Object.keys(changes).forEach((key: string) => {
    switch (key) {
      case 'rootState':
        // console.log('in rootState');
        // 刀剣男士情報の更新
        if (
          changes.rootState.newValue.responseJson &&
          changes.rootState.newValue.responseJson.sword
        ) {
          // console.log('in changes.root');
          // console.log('in changes.rootState.newValue.responseJson');
          const newSwords: Swords = changes.rootState.newValue.responseJson.sword;
          const oldSwords: Swords =
            changes.rootState.oldValue &&
            changes.rootState.oldValue.responseJson &&
            changes.rootState.oldValue.responseJson.sword
              ? changes.rootState.oldValue.responseJson.sword
              : {};
          if (JSON.stringify(newSwords) !== JSON.stringify(oldSwords)) {
            // console.log('homeSwords更新');
            store.dispatch(setHomeSwords(newSwords ?? {}));
          }
        }
        // 本体側の色調モード更新の検出
        if (
          changes.rootState.newValue.browserSetting &&
          changes.rootState.newValue.browserSetting.colorTone
        ) {
          const newToneMode: toneMode = changes.rootState.newValue.browserSetting.colorTone;
          const oldToneMode: toneMode =
            changes.rootState.oldValue &&
            changes.rootState.oldValue.browserSetting &&
            changes.rootState.oldValue.browserSetting.colorTone
              ? changes.rootState.oldValue.browserSetting.colorTone
              : browserSettingInitialState.colorTone;
          if (newToneMode !== oldToneMode) {
            store.dispatch(selectToneMode(newToneMode ?? browserSettingInitialState.colorTone));
          }
        }
        break;
      case 'handbookState':
        // console.log('in handbookState');
        // 遠征の季節報酬更新
        if (
          changes.handbookState.newValue.conquestTable &&
          changes.handbookState.newValue.conquestTable.seasonRewardItems
        ) {
          // console.log('changed Obj %o', changes.handbookState.newValue);
          const newSeasonRewardItems: SeasonItem[] =
            changes.handbookState.newValue.conquestTable.seasonRewardItems;
          // console.log('newSRI %o', newSeasonRewardItems);
          const oldSeasonRewardItems: SeasonItem[] =
            changes.handbookState.oldValue &&
            changes.handbookState.oldValue.conquestTable &&
            changes.handbookState.oldValue.conquestTable.seasonRewardItems
              ? changes.handbookState.oldValue.conquestTable.seasonRewardItems
              : [];
          // console.log('oldSRI %o', oldSeasonRewardItems);
          // 配列はサーバー生成なのでstringifyでのdeep equalで十分
          if (JSON.stringify(newSeasonRewardItems) !== JSON.stringify(oldSeasonRewardItems)) {
            // console.log('seasonItems更新');
            // console.log('newItem %o', newSeasonRewardItems);
            // console.log('oldItem %o', oldSeasonRewardItems);
            // console.log(`No ${loopCount} newItem ${newSeasonRewardItems}`);
            store.dispatch(setSeasonItems(newSeasonRewardItems ?? []));
          }
        }
        break;
      default:
        // console.log('in default');
        // 履歴情報の更新
        if (parseInt(key, 10).toString() === key) {
          // console.log('on historyRecord');
          if (changes[key].newValue) {
            // console.log('pussing history %o', changes[key].newValue as HistoryTableContents);
            store.dispatch(pushHistory(changes[key].newValue as HistoryTableContents));
          } else {
            // console.log('removing history', changes[key].oldValue.value0);
            store.dispatch(removeHistory(changes[key].oldValue.value0));
          }
        }
        break;
    }
  });
});

const startReactDom = async (): Promise<void> => {
  // 表示系の設定
  setWindowTitle(document);

  // 過去の値を反映
  // ロードイベントの前にdispatchを走らせるとstorageの取得内容が狂う
  windowLoadEvent();

  // storageからcontentの設定を引っ張ってくる
  const storage = await browser.storage.local.get('rootState');
  const storageRootState: RootState = storage.rootState ?? rootInitialState;
  // console.log('handbookStart: %o', storageRootState.browserSetting.colorTone);
  store.dispatch(selectToneMode(storageRootState.browserSetting.colorTone));

  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(
    <Provider store={store}>
      <Content />
    </Provider>,
    app,
  );
};

startReactDom();
