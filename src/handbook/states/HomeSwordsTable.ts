import { correctType, statusType } from '../../constants';
import { Swords } from '../../content/states/responseJson/Sword';
import { homeSwordsTableContentsInitialState } from './HomeSwordsTableContents';

const initialDisplayedStatus = (): boolean[] => {
  const displayedStatus: boolean[] = [];
  Object.entries(statusType).forEach(([, value]) => {
    if (typeof value === 'number') {
      displayedStatus.push(true);
    }
  });
  return displayedStatus;
};

export const initialColumnsOrder: string[] = Object.keys(homeSwordsTableContentsInitialState);

export interface HomeSwordsTableState {
  homeSwords: Swords;
  correct: correctType;
  displayedStatus: boolean[];
  columnsOrder: string[];
}

export const homeSwordsTableInitialState: HomeSwordsTableState = {
  homeSwords: {},
  correct: correctType.none,
  displayedStatus: initialDisplayedStatus(),
  columnsOrder: initialColumnsOrder,
};
