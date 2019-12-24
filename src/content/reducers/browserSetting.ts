import { Reducer } from 'redux';

import { BrowserSettingAction, browserSettingActionType } from '../actions/browserSetting';
import { browserSettingInitialState, BrowserSettingState } from '../states/BrowserSettingState';

const browserSetting: Reducer<BrowserSettingState, BrowserSettingAction> =
    (state = browserSettingInitialState, action) => {
        switch (action.type) {
            case browserSettingActionType.SELECT_BROWSERSCALE:
                return {
                    ...state,
                    scale: action.scale,
                };
            case browserSettingActionType.CHANGE_VIEWMODE:
                return {
                    ...state,
                    mode: action.mode,
                };
            case browserSettingActionType.CHANGE_MUTE:
                return {
                    ...state,
                    mute: action.mute,
                };
            case browserSettingActionType.LOAD_BROWSERSTATE:
                return {
                    ...state,
                    scale: action.scale,
                    mode: action.mode,
                    mute: action.mute,
                    enableNotify: action.enableNotify,
                };
            case browserSettingActionType.CHECK_DEVCONNECT:
                return {
                    ...state,
                    devConnect: action.devConnect,
                };
            case browserSettingActionType.SET_ENABLENOTIFY:
                // console.log('通知設定変更', action.enableNotify);
                return {
                    ...state,
                    enableNotify: action.enableNotify,
                };
            default:
                return state;
        }
    };

export default browserSetting;
