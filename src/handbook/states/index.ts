import { conquestTableInitialState, ConquestTableState } from './ConquestTable';
import { homeSwordsTableInitialState, HomeSwordsTableState } from './HomeSwordsTable';
import { HistoryTableState, historyTableInitialState } from './HistoryTable';
import { TabMenuState, tabMenuInitialState } from './TabMenu';

export interface HandbookState {
  conquestTable: ConquestTableState;
  homeSwordsTable: HomeSwordsTableState;
  historyTable: HistoryTableState;
  tabMenu: TabMenuState;
}

export const handbookInitialState: HandbookState = {
  conquestTable: conquestTableInitialState,
  homeSwordsTable: homeSwordsTableInitialState,
  historyTable: historyTableInitialState,
  tabMenu: tabMenuInitialState,
};
