import { applyMiddleware, createStore, Store } from 'redux';
import { middleware } from './middleware';
import { rootReducer } from './reducers/index';
import { HandbookState } from './states/index';

export const store: Store<HandbookState> = createStore(rootReducer, applyMiddleware(middleware));
// 初期値をのぞき見
// console.log('check initialState');
// console.log(store.getState());
