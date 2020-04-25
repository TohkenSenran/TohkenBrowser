import { browser } from 'webextension-polyfill-ts';

import { HistoryTableContents } from '../states/HistoryTableContents';

export const sortHistory = (history: HistoryTableContents[]): HistoryTableContents[] => {
  history.sort((a, b) => {
    if (a.value0 > b.value0) {
      return -1;
    }
    if (a.value0 < b.value0) {
      return 1;
    }
    return 0;
  });
  return history;
};

export const getAllHistory = async (): Promise<HistoryTableContents[]> => {
  const history: HistoryTableContents[] = [];
  const storage: { [key: string]: any } = await browser.storage.local.get();
  Object.entries(storage).forEach(([key, value]) => {
    if (key === parseInt(key, 10).toString()) {
      history.push(value);
    }
  });
  return sortHistory(history);
};
