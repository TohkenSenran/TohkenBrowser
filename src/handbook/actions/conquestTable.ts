import { Items } from '../../content/states/responseJson/Item';

export enum conquestTableActionType {
  SET_SEASONITEMS = 'SET_SEASONITEMS',
}

export interface SetSeasonItemsAction {
  type: conquestTableActionType.SET_SEASONITEMS;
  seasonRewardItems: Items;
}

export const setSeasonItems = (seasonRewardItems: Items): SetSeasonItemsAction =>
  ({
    type: conquestTableActionType.SET_SEASONITEMS,
    seasonRewardItems,
  });

export type ConquestTableActions =
  SetSeasonItemsAction;
