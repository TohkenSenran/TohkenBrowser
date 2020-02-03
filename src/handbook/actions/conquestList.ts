import { Items } from '../states/Item';

export enum conquestListActionType {
  SET_SEASONITEMS = 'SET_SEASONITEMS',
}

export interface SetSeasonItemsAction {
  type: conquestListActionType.SET_SEASONITEMS;
  seasonItems: Items;
}

export const setSeasonItems = (seasonItems: Items): SetSeasonItemsAction =>
  ({
    type: conquestListActionType.SET_SEASONITEMS,
    seasonItems,
  });

export type ConquestListActions =
  SetSeasonItemsAction;
