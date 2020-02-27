import { combineReducers, Reducer } from 'redux';

import { HandbookState } from '../states/index';
import conquestTable from './conquestTable';
import homeSwordsTable from './homeSwordsTable';

export const rootReducer: Reducer<HandbookState> = combineReducers<HandbookState>({
  conquestTable,
  homeSwordsTable,
});
