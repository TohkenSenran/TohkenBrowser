import { conquestTableInitialState, ConquestTableState } from './conquestTable';
import { homeSwordsTableInitialState, HomeSwordsTableState } from './HomeSwordsTable';

export interface HandBookState {
  conquestTable: ConquestTableState;
  homeSwordsTable: HomeSwordsTableState;
}

export const handbookInitialState: HandBookState = {
  conquestTable: conquestTableInitialState,
  homeSwordsTable: homeSwordsTableInitialState,
};
