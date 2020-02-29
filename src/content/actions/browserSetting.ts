import { browserSettingInitialState, BrowserSettingState, windowMode } from '../states/BrowserSettingState';

export enum browserSettingActionType {
  SELECT_BROWSERSCALE = 'SELECT_BROWSERSCALE',
  CHANGE_VIEWMODE = 'CHANGE_VIEWMODE',
  CHANGE_MUTE = 'CHANGE_MUTE',
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

export interface LoadBrowserStateAction {
  type: browserSettingActionType.LOAD_BROWSERSTATE;
  scale: number;
  mode: windowMode;
  mute: boolean;
  enableNotify: boolean;
  addCopyright: boolean;
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
  addCopyright: boolean;
}

export const selectScale = (scale: number): SelectBrowserScaleAction =>
  ({
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
  return ({
    type: browserSettingActionType.CHANGE_VIEWMODE,
    mode: nextMode,
  });
};

export const changeMute = (mute: boolean): ChangeMuteAction =>
  ({
    type: browserSettingActionType.CHANGE_MUTE,
    mute: !mute,
  });

export const loadBrowserState = (browserSetting: BrowserSettingState): LoadBrowserStateAction =>
  ({
    type: browserSettingActionType.LOAD_BROWSERSTATE,
    scale: (browserSetting.scale !== undefined) ?
      browserSetting.scale : browserSettingInitialState.scale,
    mode: (browserSetting.mode !== undefined) ?
      browserSetting.mode : browserSettingInitialState.mode,
    mute: (browserSetting.mute !== undefined) ?
      browserSetting.mute : browserSettingInitialState.mute,
    enableNotify: (browserSetting.enableNotify !== undefined) ?
      browserSetting.enableNotify : browserSettingInitialState.enableNotify,
    addCopyright: (browserSetting.addCopyright !== undefined) ?
      browserSetting.addCopyright : browserSettingInitialState.addCopyright,
  });

export const checkDevConnect = (devConnect: boolean): CheckDevConnectAction =>
  ({
    type: browserSettingActionType.CHECK_DEVCONNECT,
    devConnect,
  });

export const setEnableNotify = (enableNotify: boolean): SetEnableNotifyAction =>
  ({
    type: browserSettingActionType.SET_ENABLENOTIFY,
    enableNotify,
  });

export const addCopyright = (addCopyright: boolean): AddCopyrightAction =>
  ({
    type: browserSettingActionType.ADD_COPYRIGHT,
    addCopyright,
  });

export type BrowserSettingActions =
  SelectBrowserScaleAction |
  ChangeViewModeAction |
  ChangeMuteAction |
  LoadBrowserStateAction |
  CheckDevConnectAction |
  SetEnableNotifyAction |
  AddCopyrightAction;
