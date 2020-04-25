/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import { Item, itemInitialState } from './Item';

export type SeasonItem = Item & {
  field_id: number | string;
};

export const seasonItemInitialState: SeasonItem = { ...itemInitialState, field_id: 0 };
