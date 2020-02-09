import { Swords } from '../../content/states/responseJson/Sword';

export enum homeSwordsTableActionType {
  SET_HOMESWORDS = 'SET_HOMESWORDS',
}

export interface SetHomeSwordsAction {
  type: homeSwordsTableActionType.SET_HOMESWORDS;
  homeSwords: Swords;
}

export const setHomeSwords = (homeSwords: Swords): SetHomeSwordsAction =>
  ({
    type: homeSwordsTableActionType.SET_HOMESWORDS,
    homeSwords,
  });

export type HomeSwordsTableActions =
  SetHomeSwordsAction;
