import { combineReducers, Reducer } from 'redux';

import { RootState } from '../states/index';
import browserSetting from './browserSetting';
import partyPanel from './partyPanel';
import responseJson from './responseJson';

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  browserSetting,
  partyPanel,
  responseJson,
});
