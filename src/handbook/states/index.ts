import { conquestTableInitialState, ConquestTableState } from './ConquestTable';
import { homeSwordsTableInitialState, HomeSwordsTableState } from './HomeSwordsTable';

export interface HandbookState {
  conquestTable: ConquestTableState;
  homeSwordsTable: HomeSwordsTableState;
}

export const handbookInitialState: HandbookState = {
  conquestTable: conquestTableInitialState,
  homeSwordsTable: homeSwordsTableInitialState,
};
