import { correctType, statusType } from '../../constants';
import { partyPanelInitialState, PartyPanelState } from '../states/PartyPanelState';

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
  correct: correctType;
}

export interface SelectDisplayTextAction {
  type: partyPanelActionType.SELECT_DISPLAYTEXT;
  statusType: statusType;
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
): LoadPartyPanelStateAction => {
  // 新規追加の設定値をstoreからロードすると，新しい設定値がundefinedになる
  Object.keys(partyPanelInitialState).forEach((key: string) => {
    if (partyPanelState[key] === undefined) {
      // console.log('undefinedkey', key);
      partyPanelState[key] = partyPanelInitialState[key];
    }
  });
  return ({
    type: partyPanelActionType.LOAD_PARTYPANELSTATE,
    partyPanelState,
  });
};

export const selectCorrect = (correct: correctType): SelectSpeedCorrectAction =>
  ({
    type: partyPanelActionType.SELECT_SPEEDCORRECT,
    correct,
  });

export const selectText =
  (selectType: statusType, selectViewStatus: boolean[]): SelectDisplayTextAction => {
    const getNextType = (oldType: statusType): statusType => (
      (oldType + 1 < (Object.keys(statusType).length / 2)) ? oldType + 1 : statusType.none
    );
    let nextTextType: statusType = getNextType(selectType);
    while (!selectViewStatus[nextTextType]) {
      nextTextType = getNextType(nextTextType);
    }
    // console.log(`in PartyPanel action ${nextTextType}`);
    return ({
      type: partyPanelActionType.SELECT_DISPLAYTEXT,
      statusType: nextTextType,
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
