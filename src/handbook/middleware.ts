import { Action, Dispatch, Middleware, Store, MiddlewareAPI } from 'redux';

import { handbookInitialState, HandbookState } from './states';

export const middleware: Middleware<{}, HandbookState> = (store: MiddlewareAPI) =>
  (next: Dispatch<Action>) => (action: Action) => {
    // before

    next(action);
    // after
    const handbookState: HandbookState = store.getState();

    // Stateの保存
    // console.log('save ', handbookInitialState);
    chrome.storage.local.set({ handbookState });
  };
