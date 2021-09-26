import { Reducer } from 'redux';

import { BrowserSettingActions, browserSettingActionType } from '../actions/browserSetting';
import { browserSettingInitialState, BrowserSettingState } from '../states/BrowserSettingState';

export const browserSetting: Reducer<BrowserSettingState, BrowserSettingActions> = (
  state = browserSettingInitialState,
  action,
) => {
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
    case browserSettingActionType.SELECT_TONEMODE:
      return {
        ...state,
        colorTone: action.colorTone,
      };
    case browserSettingActionType.LOAD_BROWSERSTATE:
      return {
        ...state,
        scale: action.scale,
        mode: action.mode,
        mute: action.mute,
        colorTone: action.colorTone,
        enableNotify: action.enableNotify,
        showCopyright: action.showCopyright,
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
    case browserSettingActionType.ADD_COPYRIGHT:
      // console.log('通知設定変更', action.enableNotify);
      return {
        ...state,
        showCopyright: action.showCopyright,
      };
    default:
      return state;
  }
};
