import { correctType } from '../../constants';
import { Swords } from '../../content/states/responseJson/Sword';

export enum homeSwordsTableActionType {
  SET_HOMESWORDS = 'SET_HOMESWORDS',
  SELECT_CORRECT = 'SELECT_CORRECT',
}

export interface SetHomeSwordsAction {
  type: homeSwordsTableActionType.SET_HOMESWORDS;
  homeSwords: Swords;
}

export interface SelectCorrectAction {
  type: homeSwordsTableActionType.SELECT_CORRECT;
  correct: correctType;
}

export const setHomeSwords = (homeSwords: Swords): SetHomeSwordsAction =>
  ({
    type: homeSwordsTableActionType.SET_HOMESWORDS,
    homeSwords,
  });

export const selectCorrect = (correct: correctType): SelectCorrectAction =>
  ({
    type: homeSwordsTableActionType.SELECT_CORRECT,
    correct,
  });

export type HomeSwordsTableActions =
  SetHomeSwordsAction |
  SelectCorrectAction;
