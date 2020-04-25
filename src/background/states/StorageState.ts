import { RootState, rootInitialState } from '../../content/states';
import { HandbookState, handbookInitialState } from '../../handbook/states';
import { WindowState, windowInitialState } from './WindowState';

export type StorageState = {
  rootState: RootState;
  handbookState: HandbookState;
  browserWindow: WindowState;
  handbookWindow: WindowState;
  browserWindowId: number;
  handbookWindowId: number;
};

export const storageInitialState: StorageState = {
  rootState: rootInitialState,
  handbookState: handbookInitialState,
  browserWindow: windowInitialState,
  handbookWindow: windowInitialState,
  browserWindowId: 0,
  handbookWindowId: 0,
};
