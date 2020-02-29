import { Reducer } from 'redux';

import { PartyPanelActions, partyPanelActionType } from '../actions/partyPanel';
import { partyPanelInitialState, PartyPanelState } from '../states/PartyPanelState';

const partyPanel: Reducer<PartyPanelState, PartyPanelActions> =
  (state = partyPanelInitialState, action) => {
    switch (action.type) {
      case partyPanelActionType.LOAD_PARTYPANELSTATE:
        return action.partyPanelState;
      case partyPanelActionType.SELECT_SPEEDCORRECT:
        return {
          ...state,
          correct: action.correct,
        };
      case partyPanelActionType.SELECT_STATUSTYPE:
        return {
          ...state,
          statusType: action.displayedType,
        };
      case partyPanelActionType.CHECK_HORSEDISABLE:
        return {
          ...state,
          horseDisable: action.horseDisable,
        };
      case partyPanelActionType.SET_ENABLEEXTENDVIEW:
        return {
          ...state,
          enableExtendView: action.enableExtendView,
        };
      case partyPanelActionType.SELECT_DISPLAYEDSTATUS:
        return {
          ...state,
          displayedStatus: action.displayedStatus,
        };

      default:
        return state;
    }
  };

export default partyPanel;
