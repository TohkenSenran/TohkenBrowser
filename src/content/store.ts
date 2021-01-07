import { applyMiddleware, createStore, Store } from 'redux';
import { middleware } from './middleware';
import { rootReducer } from './reducers/index';
import { RootState } from './states/index';

export const store: Store<RootState> = createStore(rootReducer, applyMiddleware(middleware));
// 初期値をのぞき見
// console.log('check initialState');
// console.log(store.getState());
