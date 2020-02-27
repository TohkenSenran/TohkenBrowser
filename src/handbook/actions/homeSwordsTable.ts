import { correctType } from '../../constants';
import { Swords } from '../../content/states/responseJson/Sword';
import { homeSwordsTableInitialState, HomeSwordsTableState } from '../states/HomeSwordsTable';
import { fillUndefinedProps } from '../models/fillUndefinedProps';

export enum homeSwordsTableActionType {
  UPDATE_HOMESWORDSTABLE = 'UPDATE_HOMESWORDSTABLE',
  SET_HOMESWORDS = 'SET_HOMESWORDS',
  SELECT_CORRECT = 'SELECT_CORRECT',
  SELECT_DISPLAYEDSTATUS = 'SELECT_DISPLAYEDSTATUS',
}

export interface UpdateHomeSwordsTableAction {
  type: homeSwordsTableActionType.UPDATE_HOMESWORDSTABLE;
  homeSwordsTable: HomeSwordsTableState;
}

export interface SetHomeSwordsAction {
  type: homeSwordsTableActionType.SET_HOMESWORDS;
  homeSwords: Swords;
}

export interface SelectCorrectAction {
  type: homeSwordsTableActionType.SELECT_CORRECT;
  correct: correctType;
}

export interface SelectDisplayedStatusAction {
  type: homeSwordsTableActionType.SELECT_DISPLAYEDSTATUS;
  displayedStatus: boolean[];
}

export const updateHomeSwordsTable =
  (homeSwordsTable: HomeSwordsTableState): UpdateHomeSwordsTableAction =>
    ({
      type: homeSwordsTableActionType.UPDATE_HOMESWORDSTABLE,
      homeSwordsTable: (homeSwordsTable !== undefined) ?
        fillUndefinedProps<HomeSwordsTableState>(homeSwordsTable, homeSwordsTableInitialState) :
        homeSwordsTableInitialState,
    });

export const setHomeSwords = (homeSwords: Swords): SetHomeSwordsAction =>
  ({
    type: homeSwordsTableActionType.SET_HOMESWORDS,
    homeSwords: (homeSwords !== undefined) ? homeSwords : homeSwordsTableInitialState.homeSwords,
  });

export const selectCorrect = (correct: correctType): SelectCorrectAction =>
  ({
    type: homeSwordsTableActionType.SELECT_CORRECT,
    correct: (correct !== undefined) ? correct : homeSwordsTableInitialState.correct,
  });

export const selectDisplayedStatus = (displayedStatus: boolean[]): SelectDisplayedStatusAction =>
  ({
    type: homeSwordsTableActionType.SELECT_DISPLAYEDSTATUS,
    displayedStatus: (displayedStatus !== undefined) ?
      displayedStatus : homeSwordsTableInitialState.displayedStatus,
  });

export type HomeSwordsTableActions =
  UpdateHomeSwordsTableAction |
  SetHomeSwordsAction |
  SelectCorrectAction |
  SelectDisplayedStatusAction;
