import { browser } from 'webextension-polyfill-ts';
import store from '../store';

import { updateConquestTable } from '../actions/conquestTable';
import { updateHomeSwordsTable } from '../actions/homeSwordsTable';
import { HandbookState } from '../states';
import { HistoryTableContents } from '../states/HistoryTableContents';
import { getAllHistory } from './getAllHistory';
import { updateHistoryTable } from '../actions/historyTable';
import { Swords } from '../../content/states/responseJson/Sword';
import { updateTabMenu } from '../actions/tabMenu';
import { tabMenuInitialState } from '../states/TabMenu';

export const windowLoadEvent = async (): Promise<void> => {
  // Load時に過去の設定値を再読み込み
  // console.log('onLoadEvent');
  const response: { [key: string]: any } = await browser.storage.local.get();

  const handbookState: HandbookState = store.getState();
  const storageState: HandbookState = response.handbookState
    ? response.handbookState
    : handbookState;
  // console.log(`directLoad ${response.storageState.browserSetting.scale}`);
  // console.log('load loadBrowserState');
  // console.log('storage', response.handbookState);
  // console.log('handbook', handbookState);
  // console.log('Loading TabMenu %o', storageState.tabMenu);
  store.dispatch(updateTabMenu(storageState.tabMenu ?? tabMenuInitialState));

  store.dispatch(updateConquestTable(storageState.conquestTable ?? handbookState.conquestTable));
  // 刀剣男子情報だけrootStateから引っ張ってくる
  const swords: Swords =
    response.rootState && response.rootState.responseJson && response.rootState.responseJson.sword
      ? response.rootState.responseJson.sword
      : {};
  store.dispatch(
    updateHomeSwordsTable(
      storageState.homeSwordsTable
        ? { ...storageState.homeSwordsTable, homeSwords: swords }
        : handbookState.homeSwordsTable,
    ),
  );
  const history: HistoryTableContents[] = await getAllHistory();
  // console.log('history length', history.length);
  // console.log('history exp.', history[0]);
  // 起動時の情報取得
  store.dispatch(updateHistoryTable(history));
};
