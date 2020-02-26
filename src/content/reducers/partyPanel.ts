import { Reducer } from 'redux';

import { PartyPanelAction, partyPanelActionType } from '../actions/partyPanel';
import { partyPanelInitialState, PartyPanelState } from '../states/PartyPanelState';

const partyPanel: Reducer<PartyPanelState, PartyPanelAction> =
  (state = partyPanelInitialState, action) => {
    switch (action.type) {
      case partyPanelActionType.LOAD_PARTYPANELSTATE:
        return action.partyPanelState;
      case partyPanelActionType.SELECT_SPEEDCORRECT:
        return {
          ...state,
          correct: action.correct,
        };
      case partyPanelActionType.SELECT_DISPLAYTEXT:
        return {
          ...state,
          statusType: action.statusType,
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
      case partyPanelActionType.SELECT_VIEWSTATUS:
        return {
          ...state,
          selectViewStatus: action.selectViewStatus,
        };

      default:
        return state;
    }
  };

export default partyPanel;
