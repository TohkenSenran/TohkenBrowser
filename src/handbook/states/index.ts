import { conquestTableInitialState, ConquestTableState } from './conquestTable';

export interface HandBookState {
  conquestTable: ConquestTableState;
}

export const handbookInitialState: HandBookState = {
  conquestTable: conquestTableInitialState,
};
