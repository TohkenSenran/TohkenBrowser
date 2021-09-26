/* eslint-disable no-shadow */
import { toneMode, windowMode } from '../../constants';
import { browserSettingInitialState, BrowserSettingState } from '../states/BrowserSettingState';

export enum browserSettingActionType {
  SELECT_BROWSERSCALE = 'SELECT_BROWSERSCALE',
  CHANGE_VIEWMODE = 'CHANGE_VIEWMODE',
  CHANGE_MUTE = 'CHANGE_MUTE',
  SELECT_TONEMODE = 'SELECT_TONEMODE',
  LOAD_BROWSERSTATE = 'LOAD_BROWSERSTATE',
  CHECK_DEVCONNECT = 'CHECK_DEVCONNECT',
  SET_ENABLENOTIFY = 'SET_ENABLENOTIFY',
  ADD_COPYRIGHT = 'ADD_COPYRIGHT',
}

export interface SelectBrowserScaleAction {
  type: browserSettingActionType.SELECT_BROWSERSCALE;
  scale: number;
}

export interface ChangeViewModeAction {
  type: browserSettingActionType.CHANGE_VIEWMODE;
  mode: windowMode;
}

export interface ChangeMuteAction {
  type: browserSettingActionType.CHANGE_MUTE;
  mute: boolean;
}

export interface SelectToneModeAction {
  type: browserSettingActionType.SELECT_TONEMODE;
  colorTone: toneMode;
}

export interface LoadBrowserStateAction {
  type: browserSettingActionType.LOAD_BROWSERSTATE;
  mode: windowMode;
  mute: boolean;
  scale: number;
  colorTone: toneMode;
  enableNotify: boolean;
  showCopyright: boolean;
}

export interface CheckDevConnectAction {
  type: browserSettingActionType.CHECK_DEVCONNECT;
  devConnect: boolean;
}

export interface SetEnableNotifyAction {
  type: browserSettingActionType.SET_ENABLENOTIFY;
  enableNotify: boolean;
}

export interface AddCopyrightAction {
  type: browserSettingActionType.ADD_COPYRIGHT;
  showCopyright: boolean;
}

export const selectScale = (scale: number): SelectBrowserScaleAction => ({
  type: browserSettingActionType.SELECT_BROWSERSCALE,
  scale,
});

export const changeViewMode = (mode: windowMode): ChangeViewModeAction => {
  let nextMode: windowMode = windowMode.SEN;
  switch (mode) {
    case windowMode.SEN:
      nextMode = windowMode.SHOU;
      break;
    case windowMode.SHOU:
      nextMode = windowMode.HYOU;
      break;
    case windowMode.HYOU:
      nextMode = windowMode.SEN;
      break;
    default:
      nextMode = mode;
      break;
  }
  return {
    type: browserSettingActionType.CHANGE_VIEWMODE,
    mode: nextMode,
  };
};

export const changeMute = (mute: boolean): ChangeMuteAction => ({
  type: browserSettingActionType.CHANGE_MUTE,
  mute: !mute,
});

export const selectToneMode = (colorTone: toneMode): SelectToneModeAction => ({
  type: browserSettingActionType.SELECT_TONEMODE,
  colorTone,
});

export const loadBrowserState = (browserSetting: BrowserSettingState): LoadBrowserStateAction => ({
  type: browserSettingActionType.LOAD_BROWSERSTATE,
  mode: browserSetting.mode ?? browserSettingInitialState.mode,
  mute: browserSetting.mute ?? browserSettingInitialState.mute,
  scale: browserSetting.scale ?? browserSettingInitialState.scale,
  colorTone: browserSetting.colorTone ?? browserSettingInitialState.colorTone,
  enableNotify: browserSetting.enableNotify ?? browserSettingInitialState.enableNotify,
  showCopyright: browserSetting.showCopyright ?? browserSettingInitialState.showCopyright,
});

export const checkDevConnect = (devConnect: boolean): CheckDevConnectAction => ({
  type: browserSettingActionType.CHECK_DEVCONNECT,
  devConnect,
});

export const setEnableNotify = (enableNotify: boolean): SetEnableNotifyAction => ({
  type: browserSettingActionType.SET_ENABLENOTIFY,
  enableNotify,
});

export const addCopyright = (showCopyright: boolean): AddCopyrightAction => ({
  type: browserSettingActionType.ADD_COPYRIGHT,
  showCopyright,
});

export type BrowserSettingActions =
  | SelectBrowserScaleAction
  | ChangeViewModeAction
  | ChangeMuteAction
  | SelectToneModeAction
  | LoadBrowserStateAction
  | CheckDevConnectAction
  | SetEnableNotifyAction
  | AddCopyrightAction;
