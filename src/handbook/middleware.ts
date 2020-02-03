import { Action, Dispatch, Middleware, Store } from 'redux';

import { HandBookState } from './states';

export const middleware: Middleware = (store: Store<HandBookState>) =>
  (next: Dispatch<Action>) => (action: Action) => {
    // before
    // console.log('before action: %O', action);
    // console.log(`before action type: ${action.type}`);
    next(action);
    // console.log(`after scale: ${(store.getState()).browserSetting.scale}`);

    const handBookState: HandBookState = store.getState();
    // console.log(`after scale: ${handBookState.browserSetting.scale}`);

    // Stateの保存
    chrome.storage.local.set({ handBookState });
  };
