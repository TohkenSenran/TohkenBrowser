import { Items } from '../../content/states/responseJson/Item';

export type ConquestTableState = {
  seasonRewardItems: Items,
};

export const conquestTableInitialState: ConquestTableState = {
  seasonRewardItems: {},
};
