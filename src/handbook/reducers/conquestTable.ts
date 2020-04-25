import { Reducer } from 'redux';

import { ConquestTableActions, conquestTableActionType } from '../actions/conquestTable';
import { conquestTableInitialState, ConquestTableState } from '../states/ConquestTable';

const conquestTable: Reducer<ConquestTableState, ConquestTableActions> = (
  state = conquestTableInitialState,
  action,
) => {
  switch (action.type) {
    case conquestTableActionType.UPDATE_CONQUESTTABLE:
      return action.conquestTable;
    case conquestTableActionType.SET_SEASONITEMS:
      // console.log('in reducer %o', action.seasonRewardItems);
      return {
        ...state,
        seasonRewardItems: action.seasonRewardItems,
      };
    default:
      return state;
  }
};

export default conquestTable;
