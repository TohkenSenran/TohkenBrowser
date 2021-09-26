import { correctType } from '../../constants';
import { Swords } from '../../content/states/responseJson/Sword';
import { fillUndefinedProps } from '../models/fillUndefinedProps';
import { homeSwordsTableInitialState, HomeSwordsTableState } from '../states/HomeSwordsTable';

export enum homeSwordsTableActionType {
  UPDATE_HOMESWORDSTABLE = 'UPDATE_HOMESWORDSTABLE',
  SET_HOMESWORDS = 'SET_HOMESWORDS',
  SELECT_CORRECT = 'SELECT_CORRECT',
  SELECT_DISPLAYEDSTATUS = 'SELECT_DISPLAYEDSTATUS',
  SET_COLUMNSORDER = 'SET_COLUMNSORDER',
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

export interface SetColumnsOrderAction {
  type: homeSwordsTableActionType.SET_COLUMNSORDER;
  columnsOrder: string[];
}

export const updateHomeSwordsTable = (
  homeSwordsTable: HomeSwordsTableState,
): UpdateHomeSwordsTableAction => ({
  type: homeSwordsTableActionType.UPDATE_HOMESWORDSTABLE,
  homeSwordsTable:
    fillUndefinedProps<HomeSwordsTableState>(homeSwordsTable, homeSwordsTableInitialState) ??
    homeSwordsTableInitialState,
});

export const setHomeSwords = (homeSwords: Swords): SetHomeSwordsAction => ({
  type: homeSwordsTableActionType.SET_HOMESWORDS,
  homeSwords: homeSwords ?? homeSwordsTableInitialState.homeSwords,
});

export const selectCorrect = (correct: correctType): SelectCorrectAction => ({
  type: homeSwordsTableActionType.SELECT_CORRECT,
  correct: correct ?? homeSwordsTableInitialState.correct,
});

export const selectDisplayedStatus = (displayedStatus: boolean[]): SelectDisplayedStatusAction => ({
  type: homeSwordsTableActionType.SELECT_DISPLAYEDSTATUS,
  displayedStatus: displayedStatus ?? homeSwordsTableInitialState.displayedStatus,
});

export const setColumnsOrder = (columnsOrder: string[]): SetColumnsOrderAction => ({
  type: homeSwordsTableActionType.SET_COLUMNSORDER,
  columnsOrder: columnsOrder ?? homeSwordsTableInitialState.columnsOrder,
});

export type HomeSwordsTableActions =
  | UpdateHomeSwordsTableAction
  | SetHomeSwordsAction
  | SelectCorrectAction
  | SelectDisplayedStatusAction
  | SetColumnsOrderAction;
