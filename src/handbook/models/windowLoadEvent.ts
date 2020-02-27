import store from '../store';

import { updateConquestTable } from '../actions/conquestTable';
import { updateHomeSwordsTable } from '../actions/homeSwordsTable';
import { HandbookState } from '../states';

export const windowLoadEvent = () => {
  // Load時に過去の設定値を再読み込み
  console.log('onLoadEvent');
  chrome.storage.local.get('handbookState', (response) => {
    const handbookState: HandbookState = store.getState();
    const storageState: HandbookState = response.handbookState ?
      response.handbookState : handbookState;
    // console.log(`directLoad ${response.storageState.browserSetting.scale}`);
    // console.log('load loadBrowserState');
    // console.log('storage', response.handbookState);
    // console.log('handbook', handbookState);
    store.dispatch(updateConquestTable(
      storageState.conquestTable ? storageState.conquestTable : handbookState.conquestTable,
    ));
    store.dispatch(updateHomeSwordsTable(
      storageState.homeSwordsTable ? storageState.homeSwordsTable : handbookState.homeSwordsTable,
    ));
  });
};
