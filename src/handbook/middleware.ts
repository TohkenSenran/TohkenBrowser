import { Action, Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { browser } from 'webextension-polyfill-ts';

import { HandbookState, handbookInitialState } from './states';

export const middleware: Middleware<{}, HandbookState> = (store: MiddlewareAPI) => (
  next: Dispatch<Action>,
) => (action: Action): void => {
  // before

  next(action);
  // after
  // console.log(action.type);
  const handbookState: any = { ...handbookInitialState };
  const tempState: HandbookState = store.getState();

  handbookState.conquestTable = { ...tempState.conquestTable };
  handbookState.homeSwordsTable = { ...tempState.homeSwordsTable };
  handbookState.historyTable = { ...tempState.historyTable };
  handbookState.tabMenu = { ...tempState.tabMenu };

  // Stateの保存
  // 重複情報の削除
  handbookState.homeSwordsTable.homeSwords = {};
  handbookState.historyTable.history = [];
  // console.log(`actionName ${action.type}`);
  // console.log('tempState %o', tempState);
  const now = Date.now();
  handbookState.now = now;
  // console.log('storagingDate ', now);
  // console.log('storagedState %o', handbookState);

  // ステータスロード時は保存をかけない
  if (
    action.type !== 'UPDATE_CONQUESTTABLE' &&
    action.type !== 'UPDATE_HISTORYTABLE' &&
    action.type !== 'UPDATE_HOMESWORDSTABLE' &&
    action.type !== 'UPDATE_TABMENU'
  ) {
    browser.storage.local.set({ handbookState });
  }
};
