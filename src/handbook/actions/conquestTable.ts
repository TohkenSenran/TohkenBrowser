import { Items } from '../../content/states/responseJson/Item';

export enum conquestTableActionType {
  SET_SEASONITEMS = 'SET_SEASONITEMS',
}

export interface SetSeasonItemsAction {
  type: conquestTableActionType.SET_SEASONITEMS;
  seasonItems: Items;
}

export const setSeasonItems = (seasonItems: Items): SetSeasonItemsAction =>
  ({
    type: conquestTableActionType.SET_SEASONITEMS,
    seasonItems,
  });

export type ConquestTableActions =
  SetSeasonItemsAction;
