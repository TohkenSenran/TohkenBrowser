import { Reducer } from 'redux';
import { ConquestListActions, conquestListActionType } from '../actions/conquestList';
import { conquestListInitialState, ConquestListState } from '../states/ConquestList';

const conquestList: Reducer<ConquestListState, ConquestListActions> =
  (state = conquestListInitialState, action) => {
    switch (action.type) {
      case conquestListActionType.SET_SEASONITEMS:
        return {
          ...state,
          season_reward_list: action.seasonItems,
        };
      default:
        return state;
    }
  };

export default conquestList;
