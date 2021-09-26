import { tabType, toneMode } from '../../constants';
import { TabMenuState } from '../states/TabMenu';

export enum tabMenuActionType {
  UPDATE_TABMENU = 'UPDATE_TABMENU',
  SET_TABMENUTYPE = 'SET_TABMENUTYPE',
  SELECT_TONEMODE = 'SELECT_TONEMODE',
}

export interface UpdateTabMenuAction {
  type: tabMenuActionType.UPDATE_TABMENU;
  tabMenu: TabMenuState;
}

export interface SetTabMenuTypeAction {
  type: tabMenuActionType.SET_TABMENUTYPE;
  tabType: tabType;
}

export interface SelectToneModeAction {
  type: tabMenuActionType.SELECT_TONEMODE;
  colorTone: toneMode;
}

export const updateTabMenu = (tabMenu: TabMenuState): UpdateTabMenuAction => ({
  type: tabMenuActionType.UPDATE_TABMENU,
  tabMenu,
});

export const setTabMenuType = (targetTabType: tabType): SetTabMenuTypeAction => ({
  type: tabMenuActionType.SET_TABMENUTYPE,
  tabType: targetTabType,
});

export const selectToneMode = (colorTone: toneMode): SelectToneModeAction => ({
  type: tabMenuActionType.SELECT_TONEMODE,
  colorTone,
});

export type TabMenuActions = UpdateTabMenuAction | SetTabMenuTypeAction | SelectToneModeAction;
