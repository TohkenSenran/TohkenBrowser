import { Reducer } from 'redux';

import { PartyPanelAction, partyPanelActionType } from '../actions/partyPanel';
import { partyPanelInitialState, PartyPanelState, textType } from '../states/PartyPanelState';

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
          textType: action.textType,
        };
      case partyPanelActionType.CHECK_HORSEDISABLE:
        return {
          ...state,
          horseDisable: action.horseDisable,
        };
      case partyPanelActionType.SELECT_EXTENDVIEW:
        return {
          ...state,
          extendView: action.extendView,
        };
      case partyPanelActionType.SET_ENABLEEXTENDVIEW:
        return {
          ...state,
          enableExtendView: action.enableExtendView,
        };
      default:
        return state;
    }
  };

export default partyPanel;
