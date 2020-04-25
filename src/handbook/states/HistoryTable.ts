import { HistoryTableContents } from './HistoryTableContents';

export type HistoryTableState = {
  history: HistoryTableContents[];
};

export const historyTableInitialState: HistoryTableState = {
  history: [],
};
