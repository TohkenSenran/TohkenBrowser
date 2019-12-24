export type Duty = {
  horse_id1: string | number | null, // 馬当番
  horse_id2: string | number | null,
  field_id1: string | number | null, // 畑登板
  field_id2: string | number | null,
  bout_id1: string | number | null, // 手合わせ
  bout_id2: string | number | null,
  finished_at: string | null,
};

export const dutyInitialState: Duty = {
  horse_id1: null,
  horse_id2: null,
  field_id1: null,
  field_id2: null,
  bout_id1: null,
  bout_id2: null,
  finished_at: null,
};
