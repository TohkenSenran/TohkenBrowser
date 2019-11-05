import { Action, Dispatch, Middleware, Store } from 'redux';

import { browserSettingActionType } from './actions/browserSetting';
import { requestType, sendMessageToBackground } from './models/sendMessageToBackground';
import { windowTransform } from './models/windowTransform';
import { RootState } from './states';

export const middleware: Middleware = (store: Store<RootState>) =>
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
        chrome.storage.local.set({ rootState });
        // console.log('after rS: %O', rootState);
        // console.log('after action: %O', action);
    };
