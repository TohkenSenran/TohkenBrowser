import { store } from '../store';

import { loadBrowserState } from '../actions/browserSetting';
import { loadPartyPanelState } from '../actions/partyPanel';
import { updateJsonState } from '../actions/responseJson';

import { RootState } from '../states';

export const windowLoadEvent = () => {
  // Load時に過去の設定値を再読み込み
  // console.log('onLoadEvent');
  chrome.storage.local.get('rootState', (response) => {
    const rootState: RootState = store.getState();
    const storageState: RootState = response.rootState ? response.rootState : rootState;
    // console.log(`directLoad ${response.storageState.browserSetting.scale}`);
    // console.log('load loadBrowserState');
    // console.log(store.getState());
    store.dispatch(
      loadBrowserState(
        storageState.browserSetting ? storageState.browserSetting : rootState.browserSetting,
      ),
    );
    store.dispatch(
      updateJsonState(
        storageState.responseJson ? storageState.responseJson : rootState.responseJson,
      ),
    );
    store.dispatch(
      loadPartyPanelState(storageState.partyPanel ? storageState.partyPanel : rootState.partyPanel),
    );
  });
};
