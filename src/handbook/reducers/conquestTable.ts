import { Reducer } from 'redux';
import { ConquestTableActions, conquestTableActionType } from '../actions/conquestTable';
import { conquestTableInitialState, ConquestTableState } from '../states/conquestTable';

const conquestTable: Reducer<ConquestTableState, ConquestTableActions> =
  (state = conquestTableInitialState, action) => {
    switch (action.type) {
      case conquestTableActionType.SET_SEASONITEMS:
        return {
          ...state,
          season_reward_list: action.seasonItems,
        };
      default:
        return state;
    }
  };

export default conquestTable;
