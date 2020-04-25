import { SeasonItem } from '../../content/states/responseJson/SeasonItem';

export type ConquestTableState = {
  seasonRewardItems: SeasonItem[];
};

export const conquestTableInitialState: ConquestTableState = {
  seasonRewardItems: [],
};
