import { Action, Dispatch, Middleware, MiddlewareAPI } from 'redux';

import { HandbookState } from './states';

export const middleware: Middleware<{}, HandbookState> = (store: MiddlewareAPI) => (
  next: Dispatch<Action>,
) => (action: Action): void => {
  // before

  next(action);
  // after
  const handbookState: HandbookState = store.getState();

  // Stateの保存
  // console.log('save ', handbookInitialState);
  chrome.storage.local.set({ handbookState });
};
