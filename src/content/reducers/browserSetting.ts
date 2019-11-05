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
                };
            case browserSettingActionType.CHECK_DEVCONNECT:
                return {
                    ...state,
                    devConnect: action.devConnect,
                };
            case browserSettingActionType.SET_ALERTMESSAGE:
                return {
                    ...state,
                    alertMessage: action.alertMessage,
                };
            case browserSettingActionType.SET_NOWDATE:
                return {
                    ...state,
                    date: action.date,
                };
            default:
                return state;
        }
    };

export default browserSetting;
