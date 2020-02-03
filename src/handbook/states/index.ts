import { conquestListInitialState, ConquestListState } from './ConquestList';

export interface HandBookState {
  conquestList: ConquestListState;
}

export const rootInitialState: HandBookState = {
  conquestList: conquestListInitialState,
};
