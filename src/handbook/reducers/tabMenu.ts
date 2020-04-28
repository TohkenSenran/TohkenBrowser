import { Reducer } from 'redux';
import { TabMenuState, tabMenuInitialState } from '../states/TabMenu';
import { TabMenuActions, tabMenuActionType } from '../actions/tabMenu';

const tabMenu: Reducer<TabMenuState, TabMenuActions> = (state = tabMenuInitialState, action) => {
  switch (action.type) {
    case tabMenuActionType.UPDATE_TABMENU:
      // console.log('in Reducer %o', action.tabMenu);
      return action.tabMenu;
    case tabMenuActionType.SET_TABMENUTYPE:
      return { ...state, tabType: action.tabType };
    default:
      return state;
  }
};

export default tabMenu;