import { correctType, statusType } from '../../constants';
import { Swords } from '../../content/states/responseJson/Sword';

const initialDisplayedStatus = (): boolean[] => {
  const displayedStatus: boolean[] = [];
  Object.entries(statusType).forEach(([key, value]) => {
    if (typeof value === 'number') {
      displayedStatus.push(true);
    }
  });
  return displayedStatus;
};

export interface HomeSwordsTableState {
  homeSwords: Swords;
  correct: correctType;
  displayedStatus: boolean[];
}

export const homeSwordsTableInitialState: HomeSwordsTableState = {
  homeSwords: {},
  correct: correctType.none,
  displayedStatus: initialDisplayedStatus(),
};
