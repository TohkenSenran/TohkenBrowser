import { correctType, statusType } from '../../constants';
import { partyPanelInitialState, PartyPanelState } from '../states/PartyPanelState';

export enum partyPanelActionType {
  LOAD_PARTYPANELSTATE = 'LOAD_PARTYPANELSTATE',
  SELECT_SPEEDCORRECT = 'SELECT_SPEEDCORRECT',
  SELECT_STATUSTYPE = 'SELECT_STATUSTYPE',
  CHECK_HORSEDISABLE = 'CHECK_HORSEDISABLE',
  SET_ENABLEEXTENDVIEW = 'SET_ENABLEEXTENDVIEW',
  SELECT_DISPLAYEDSTATUS = 'SELECT_DISPLAYEDSTATUS',
}

export interface LoadPartyPanelStateAction {
  type: partyPanelActionType.LOAD_PARTYPANELSTATE;
  partyPanelState: PartyPanelState;
}

export interface SelectSpeedCorrectAction {
  type: partyPanelActionType.SELECT_SPEEDCORRECT;
  correct: correctType;
}

export interface SelectStatusTypeAction {
  type: partyPanelActionType.SELECT_STATUSTYPE;
  displayedType: statusType;
}

export interface CheckHorseDisableAction {
  type: partyPanelActionType.CHECK_HORSEDISABLE;
  horseDisable: boolean;
}

export interface SetEnableExtendViewAction {
  type: partyPanelActionType.SET_ENABLEEXTENDVIEW;
  enableExtendView: boolean;
}

export interface SelectDisplayedStatusAction {
  type: partyPanelActionType.SELECT_DISPLAYEDSTATUS;
  displayedStatus: boolean[];
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

export const selectDisplayText =
  (displayedType: statusType, displayedStatus: boolean[]): SelectStatusTypeAction => {
    // console.log('displayedType', displayedType);
    // console.log('displayedStatus', displayedStatus);
    const getNextType = (oldType: statusType): statusType => (
      (oldType + 1 < (Object.keys(statusType).length / 2)) ? oldType + 1 : statusType.none
    );
    let nextDsiplayedType: statusType = getNextType(displayedType);
    while (!displayedStatus[nextDsiplayedType]) {
      nextDsiplayedType = getNextType(nextDsiplayedType);
    }
    //console.log(`in Action nextDsiplayedType ${nextDsiplayedType}`);
    return ({
      type: partyPanelActionType.SELECT_STATUSTYPE,
      displayedType: nextDsiplayedType,
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
  (displayedStatus: boolean[]): SelectDisplayedStatusAction =>
    ({
      type: partyPanelActionType.SELECT_DISPLAYEDSTATUS,
      displayedStatus,
    });

export type PartyPanelActions =
  LoadPartyPanelStateAction |
  SelectSpeedCorrectAction |
  SelectStatusTypeAction |
  CheckHorseDisableAction |
  SetEnableExtendViewAction |
  SelectDisplayedStatusAction;
