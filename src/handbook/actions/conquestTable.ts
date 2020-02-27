import { Items } from '../../content/states/responseJson/Item';
import { fillUndefinedProps } from '../models/fillUndefinedProps';
import { conquestTableInitialState, ConquestTableState } from '../states/conquestTable';

export enum conquestTableActionType {
  UPDATE_CONQUESTTABLE = 'UPDATE_CONQUESTTABLE',
  SET_SEASONITEMS = 'SET_SEASONITEMS',
}

export interface UpdateConquestTableAction {
  type: conquestTableActionType.UPDATE_CONQUESTTABLE;
  conquestTable: ConquestTableState;
}

export interface SetSeasonItemsAction {
  type: conquestTableActionType.SET_SEASONITEMS;
  seasonRewardItems: Items;
}

export const updateConquestTable = (conquestTable: ConquestTableState): UpdateConquestTableAction =>
  ({
    type: conquestTableActionType.UPDATE_CONQUESTTABLE,
    conquestTable: (conquestTable !== undefined) ?
      fillUndefinedProps<ConquestTableState>(conquestTable, conquestTableInitialState) :
      conquestTableInitialState,
  });

export const setSeasonItems = (seasonRewardItems: Items): SetSeasonItemsAction =>
  ({
    type: conquestTableActionType.SET_SEASONITEMS,
    seasonRewardItems: (seasonRewardItems !== undefined) ? seasonRewardItems : {},
  });

export type ConquestTableActions =
  UpdateConquestTableAction |
  SetSeasonItemsAction;
