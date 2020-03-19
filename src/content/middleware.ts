import { Action, Dispatch, Middleware, MiddlewareAPI, Store } from 'redux';

import { requestType } from '../background/states/requestType';
import { browserSettingActionType } from './actions/browserSetting';
import { responseJsonActionType } from './actions/responseJson';
import { sendMessageToBackground } from './models/sendMessageToBackground';
import { windowTransform } from './models/windowTransform';
import { RootState } from './states';

export const middleware: Middleware<{}, RootState> = (store: MiddlewareAPI) =>
  (next: Dispatch<Action>) => (action: Action) => {
    // before
    // console.log('before action: %O', action);
    // console.log(`before action type: ${action.type}`);
    next(action);
    // console.log(`after scale: ${(store.getState()).browserSetting.scale}`);

    const rootState: RootState = store.getState();
    // console.log(`after scale: ${rootState.browserSetting.scale}`);
    switch (action.type) {
      case browserSettingActionType.LOAD_BROWSERSTATE:
        windowTransform(rootState.browserSetting.scale, rootState.browserSetting.mode);
        sendMessageToBackground(requestType.muteChange, rootState.browserSetting.mute);
        break;
      case browserSettingActionType.CHANGE_VIEWMODE:
      case browserSettingActionType.SELECT_BROWSERSCALE:
        // console.log('changeEvent On!');
        windowTransform(rootState.browserSetting.scale, rootState.browserSetting.mode);
        break;
      case browserSettingActionType.CHANGE_MUTE:
        sendMessageToBackground(requestType.muteChange, rootState.browserSetting.mute);
        break;
    }
    // Stateの保存
    // console.log('save rootState');
    // 10秒ごとの更新時はプロパティ変更がないためstore更新を行わない
    if (action.type !== responseJsonActionType.UPDATE_DATE) {
      chrome.storage.local.set({ rootState });
    }
    // console.log('after rS: %O', rootState);
    // console.log('after action: %O', action);
  };
