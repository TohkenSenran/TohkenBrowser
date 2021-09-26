import { fillUndefinedProps } from '../models/fillUndefinedProps';
import { conquestTableInitialState, ConquestTableState } from '../states/ConquestTable';
import { SeasonItem } from '../../content/states/responseJson/SeasonItem';

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
  seasonRewardItems: SeasonItem[];
}

export const updateConquestTable = (
  conquestTable: ConquestTableState,
): UpdateConquestTableAction => ({
  type: conquestTableActionType.UPDATE_CONQUESTTABLE,
  conquestTable:
    fillUndefinedProps<ConquestTableState>(conquestTable, conquestTableInitialState) ??
    conquestTableInitialState,
});

export const setSeasonItems = (seasonRewardItems: SeasonItem[]): SetSeasonItemsAction => ({
  type: conquestTableActionType.SET_SEASONITEMS,
  seasonRewardItems: seasonRewardItems ?? [],
});

export type ConquestTableActions = UpdateConquestTableAction | SetSeasonItemsAction;
