import { applyMiddleware, createStore, Store } from 'redux';
import { middleware } from './middleware';
import { rootReducer } from './reducers/index';
import { HandBookState } from './states/index';

const store: Store<HandBookState> = createStore(rootReducer, applyMiddleware(middleware));
// 初期値をのぞき見
// console.log('check initialState');
// console.log(store.getState());
export default store;
