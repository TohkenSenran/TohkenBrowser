import {
  HistoryTableContents,
  historyTableContentsInitialState,
} from '../states/HistoryTableContents';

export enum historyTableActionType {
  UPDATE_HISTORYTABLE = 'UPDATE_HISTORYTABLE',
  PUSH_HISTORY = 'PUSH_HISTORY',
}

export interface UpdateHistoryTableAction {
  type: historyTableActionType.UPDATE_HISTORYTABLE;
  history: HistoryTableContents[];
}
export interface PushHistoryAction {
  type: historyTableActionType.PUSH_HISTORY;
  singleHistory: HistoryTableContents;
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

export type HistoryTableActions = UpdateHistoryTableAction | PushHistoryAction;
