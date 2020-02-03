import { combineReducers, Reducer } from 'redux';

import { HandBookState } from '../states/index';
import conquestList from './conquestList';

export const rootReducer: Reducer<HandBookState> = combineReducers<HandBookState>({
  conquestList,
});
