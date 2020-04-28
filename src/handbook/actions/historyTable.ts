import {
  HistoryTableContents,
  historyTableContentsInitialState,
} from '../states/HistoryTableContents';

export enum historyTableActionType {
  UPDATE_HISTORYTABLE = 'UPDATE_HISTORYTABLE',
  PUSH_HISTORY = 'PUSH_HISTORY',
  REMOVE_HISTORY = 'REMOVE_HISTORY',
}

export interface UpdateHistoryTableAction {
  type: historyTableActionType.UPDATE_HISTORYTABLE;
  history: HistoryTableContents[];
}
export interface PushHistoryAction {
  type: historyTableActionType.PUSH_HISTORY;
  singleHistory: HistoryTableContents;
}
export interface RemoveHistoryAction {
  type: historyTableActionType.REMOVE_HISTORY;
  headValue: string;
}

export const updateHistoryTable = (history: HistoryTableContents[]): UpdateHistoryTableAction => ({
  type: historyTableActionType.UPDATE_HISTORYTABLE,
  history: typeof history !== 'undefined' ? history : [],
});
export const pushHistory = (singleHistory: HistoryTableContents): PushHistoryAction => ({
  type: historyTableActionType.PUSH_HISTORY,
  singleHistory:
    typeof singleHistory !== 'undefined' ? singleHistory : historyTableContentsInitialState,
});
export const removeHistory = (headValue: string): RemoveHistoryAction => ({
  type: historyTableActionType.REMOVE_HISTORY,
  headValue,
});

export type HistoryTableActions =
  | UpdateHistoryTableAction
  | PushHistoryAction
  | RemoveHistoryAction;
