import { Swords } from '../../content/states/responseJson/Sword';

export interface HomeSwordsTableState {
  homeSwords: Swords;
}

export const homeSwordsTableInitialState: HomeSwordsTableState = {
  homeSwords: {},
};
