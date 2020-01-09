import { PartyPanelState, speedCorrect, textType } from '../states/PartyPanelState';

export enum partyPanelActionType {
  LOAD_PARTYPANELSTATE = 'LOAD_PARTYPANELSTATE',
  SELECT_SPEEDCORRECT = 'SELECT_SPEEDCORRECT',
  SELECT_DISPLAYTEXT = 'SELECT_DISPLAYTEXT',
  CHECK_HORSEDISABLE = 'CHECK_HORSEDISABLE',
  SET_ENABLEEXTENDVIEW = 'SET_ENABLEEXTENDVIEW',
  SELECT_VIEWSTATUS = 'SELECT_VIEWSTATUS',
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

export interface SetEnableExtendViewAction {
  type: partyPanelActionType.SET_ENABLEEXTENDVIEW;
  enableExtendView: boolean;
}

export interface SelectViewStatusAction {
  type: partyPanelActionType.SELECT_VIEWSTATUS;
  selectViewStatus: boolean[];
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

export const setEnableExtendView =
  (enableExtendView: boolean): SetEnableExtendViewAction =>
    ({
      type: partyPanelActionType.SET_ENABLEEXTENDVIEW,
      enableExtendView,
    });

export const setSelectViewStatus =
  (selectViewStatus: boolean[]): SelectViewStatusAction =>
    ({
      type: partyPanelActionType.SELECT_VIEWSTATUS,
      selectViewStatus,
    });

export type PartyPanelAction =
  LoadPartyPanelStateAction |
  SelectSpeedCorrectAction |
  SelectDisplayTextAction |
  CheckHorseDisableAction |
  SetEnableExtendViewAction |
  SelectViewStatusAction;
