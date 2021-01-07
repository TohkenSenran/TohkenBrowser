import { combineReducers, Reducer } from 'redux';

import { HandbookState } from '../states/index';
import { conquestTable } from './conquestTable';
import { homeSwordsTable } from './homeSwordsTable';
import { historyTable } from './historyTable';
import { tabMenu } from './tabMenu';

export const rootReducer: Reducer<HandbookState> = combineReducers<HandbookState>({
  conquestTable,
  homeSwordsTable,
  historyTable,
  tabMenu,
});
