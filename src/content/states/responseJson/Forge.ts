/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
export interface Forge {
  slot_no: string | number; // 使用スロット
  sword_id: string | number | null; // 作成される刀剣種
  push_serial_id: string | number | null; // 札のID?
  finished_at: string | null; // 終了時刻
  creating_at: string | null; // 開始時刻（独自拡張）
}

export const forgeInitialState: Forge = {
  slot_no: '1',
  sword_id: null,
  push_serial_id: null,
  finished_at: null,
  creating_at: null,
};

export type Forges = { [key: string]: Forge };
