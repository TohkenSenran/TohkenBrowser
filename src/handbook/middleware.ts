import { Action, Dispatch, Middleware, Store } from 'redux';

import { HandBookState } from './states';

export const middleware: Middleware = (store: Store<HandBookState>) =>
  (next: Dispatch<Action>) => (action: Action) => {
    // before

    next(action);
    // after
    const handBookState: HandBookState = store.getState();

    // Stateの保存
    ({ handBookState });
  };
