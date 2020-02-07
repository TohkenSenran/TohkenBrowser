import { Items } from '../../content/states/responseJson/Item';

export type ConquestTableState = {
  season_reward_list: Items,
};

export const conquestTableInitialState: ConquestTableState = {
  season_reward_list: {},
};
