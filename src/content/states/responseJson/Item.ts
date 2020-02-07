export type Item = {
  item_type: number | string,
  item_id: number | string,
  item_num: number | string,
};

export const itemsInitialState: Item = {
  item_type: 0,
  item_id: 0,
  item_num: 0,
};

export type Items = { [key: string]: Item[] };
