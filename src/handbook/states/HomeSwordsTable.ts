import { Column } from 'material-table';

import { correctType, statusType } from '../../constants';
import { Swords } from '../../content/states/responseJson/Sword';
import { initialColumns } from '../models/generateColumns';
import { HomeSwordsTableContents } from './HomeSwordsTableContents';

const initialDisplayedStatus = (): boolean[] => {
  const displayedStatus: boolean[] = [];
  Object.entries(statusType).forEach(([, value]) => {
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
  columns: Array<Column<HomeSwordsTableContents>>;
}

export const homeSwordsTableInitialState: HomeSwordsTableState = {
  homeSwords: {},
  correct: correctType.none,
  displayedStatus: initialDisplayedStatus(),
  columns: initialColumns(),
};
