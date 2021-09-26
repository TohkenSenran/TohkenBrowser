import { Reducer } from 'redux';
import { TabMenuState, tabMenuInitialState } from '../states/TabMenu';
import { TabMenuActions, tabMenuActionType } from '../actions/tabMenu';

export const tabMenu: Reducer<TabMenuState, TabMenuActions> = (
  state = tabMenuInitialState,
  action,
) => {
  switch (action.type) {
    case tabMenuActionType.UPDATE_TABMENU:
      // console.log('in Reducer %o', action.tabMenu);
      return action.tabMenu;
    case tabMenuActionType.SET_TABMENUTYPE:
      return { ...state, tabType: action.tabType };
    case tabMenuActionType.SELECT_TONEMODE:
      // console.log('in Reducer %o', { ...state, colorTone: action.colorTone });
      return { ...state, colorTone: action.colorTone };
    default:
      return state;
  }
};
