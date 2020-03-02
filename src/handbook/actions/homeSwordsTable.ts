import { Column } from 'material-table';
import { correctType } from '../../constants';
import { Swords } from '../../content/states/responseJson/Sword';
import { fillUndefinedProps } from '../models/fillUndefinedProps';
import { homeSwordsTableInitialState, HomeSwordsTableState } from '../states/HomeSwordsTable';
import { HomeSwordsTableContents } from '../states/HomeSwordsTableContents';

export enum homeSwordsTableActionType {
  UPDATE_HOMESWORDSTABLE = 'UPDATE_HOMESWORDSTABLE',
  SET_HOMESWORDS = 'SET_HOMESWORDS',
  SELECT_CORRECT = 'SELECT_CORRECT',
  SELECT_DISPLAYEDSTATUS = 'SELECT_DISPLAYEDSTATUS',
  SET_COLUMNS = 'SET_COLUMNS',
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

export interface SetColumnsAction {
  type: homeSwordsTableActionType.SET_COLUMNS;
  columns: Array<Column<HomeSwordsTableContents>>;
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

export const setColumns = (columns: Array<Column<HomeSwordsTableContents>>): SetColumnsAction =>
  ({
    type: homeSwordsTableActionType.SET_COLUMNS,
    columns: (columns !== undefined) ? columns : homeSwordsTableInitialState.columns,
  });

export type HomeSwordsTableActions =
  UpdateHomeSwordsTableAction |
  SetHomeSwordsAction |
  SelectCorrectAction |
  SelectDisplayedStatusAction |
  SetColumnsAction;
