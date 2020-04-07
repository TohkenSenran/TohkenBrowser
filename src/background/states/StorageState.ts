import { RootState } from '../../content/states';
import { HandbookState } from '../../handbook/states';
import { WindowState } from './WindowState';

export type StorageState = {
  rootState: RootState;
  handbookState: HandbookState;
  browserWindow: WindowState;
  handbookWindow: WindowState;
  browserWindowId: number;
  handbookWindowId: number;
};
