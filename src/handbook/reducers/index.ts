import { combineReducers, Reducer } from 'redux';

import { HandBookState } from '../states/index';
import conquestTable from './conquestTable';

export const rootReducer: Reducer<HandBookState> = combineReducers<HandBookState>({
  conquestTable,
});
