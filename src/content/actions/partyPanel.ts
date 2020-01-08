import { PartyPanelState, speedCorrect, textType } from '../states/PartyPanelState';

export enum partyPanelActionType {
  LOAD_PARTYPANELSTATE = 'LOAD_PARTYPANELSTATE',
  SELECT_SPEEDCORRECT = 'SELECT_SPEEDCORRECT',
  SELECT_DISPLAYTEXT = 'SELECT_DISPLAYTEXT',
  CHECK_HORSEDISABLE = 'CHECK_HORSEDISABLE',
  SELECT_EXTENDVIEW = 'SELECT_EXTENDVIEW',
  SET_ENABLEEXTENDVIEW = 'SET_ENABLEEXTENDVIEW',
}

export interface LoadPartyPanelStateAction {
  type: partyPanelActionType.LOAD_PARTYPANELSTATE;
  partyPanelState: PartyPanelState;
}

export interface SelectSpeedCorrectAction {
  type: partyPanelActionType.SELECT_SPEEDCORRECT;
  correct: speedCorrect;
}

export interface SelectDisplayTextAction {
  type: partyPanelActionType.SELECT_DISPLAYTEXT;
  textType: textType;
}

export interface CheckHorseDisableAction {
  type: partyPanelActionType.CHECK_HORSEDISABLE;
  horseDisable: boolean;
}

export interface SelectExtendViewAction {
  type: partyPanelActionType.SELECT_EXTENDVIEW;
  extendView: boolean;
}

export interface SetEnableExtendViewAction {
  type: partyPanelActionType.SET_ENABLEEXTENDVIEW;
  enableExtendView: boolean;
}

export const loadPartyPanelState = (
  partyPanelState: PartyPanelState,
): LoadPartyPanelStateAction => ({
  type: partyPanelActionType.LOAD_PARTYPANELSTATE,
  partyPanelState,
});

export const selectCorrect = (correct: speedCorrect): SelectSpeedCorrectAction =>
  ({
    type: partyPanelActionType.SELECT_SPEEDCORRECT,
    correct,
  });

export const selectText = (selectType: textType): SelectDisplayTextAction => {
  let nextTextType: textType = textType.none;
  if (selectType < (Object.keys(textType).length / 2) - 1) {
    nextTextType = selectType + 1;
  }
  // console.log(`in PartyPanel action ${nextTextType}`);
  return ({
    type: partyPanelActionType.SELECT_DISPLAYTEXT,
    textType: nextTextType,
  });
};

export const checkHorseDisable = (horseDisable: boolean): CheckHorseDisableAction =>
  ({
    type: partyPanelActionType.CHECK_HORSEDISABLE,
    horseDisable: !horseDisable,
  });

export const selectExtendView = (extendView: boolean): SelectExtendViewAction =>
  ({
    type: partyPanelActionType.SELECT_EXTENDVIEW,
    extendView: !extendView,
  });

export const setEnableExtendView =
  (enableExtendView: boolean): SetEnableExtendViewAction =>
    ({
      type: partyPanelActionType.SET_ENABLEEXTENDVIEW,
      enableExtendView,
    });

export type PartyPanelAction =
  LoadPartyPanelStateAction |
  SelectSpeedCorrectAction |
  SelectDisplayTextAction |
  CheckHorseDisableAction |
  SelectExtendViewAction |
  SetEnableExtendViewAction;
