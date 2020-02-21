import { correctType } from '../../constants';
import { Swords } from '../../content/states/responseJson/Sword';

export interface HomeSwordsTableState {
  homeSwords: Swords;
  correct: correctType;
}

export const homeSwordsTableInitialState: HomeSwordsTableState = {
  homeSwords: {},
  correct: correctType.none,
};
