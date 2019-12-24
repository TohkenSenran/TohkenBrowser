import { BrowserSettingState, windowMode } from '../states/BrowserSettingState';

export enum browserSettingActionType {
  SELECT_BROWSERSCALE = 'SELECT_BROWSERSCALE',
  CHANGE_VIEWMODE = 'CHANGE_VIEWMODE',
  CHANGE_MUTE = 'CHANGE_MUTE',
  LOAD_BROWSERSTATE = 'LOAD_BROWSERSTATE',
  CHECK_DEVCONNECT = 'CHECK_DEVCONNECT',
  SET_ENABLENOTIFY = 'SET_ENABLENOTIFY',
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
}

export interface CheckDevConnectAction {
  type: browserSettingActionType.CHECK_DEVCONNECT;
  devConnect: boolean;
}

export interface SetEnableNotifyAction {
  type: browserSettingActionType.SET_ENABLENOTIFY;
  enableNotify: boolean;
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
    scale: browserSetting.scale,
    mode: browserSetting.mode,
    mute: browserSetting.mute,
    enableNotify: browserSetting.enableNotify,
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

export type BrowserSettingAction =
  SelectBrowserScaleAction |
  ChangeViewModeAction |
  ChangeMuteAction |
  LoadBrowserStateAction |
  CheckDevConnectAction |
  SetEnableNotifyAction;
