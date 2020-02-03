import { Items } from './item';

export type ConquestListState = {
  season_reward_list: Items,
};

export const conquestListInitialState: ConquestListState = {
  season_reward_list: {},
};
