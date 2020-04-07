/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
interface Slot {
  serial_id: string | number | null;
}

export interface Party {
  party_no: string | number; // 部隊番号
  status: string | number; // 部隊の状態 *1:待機中、2:遠征中、3:出陣中
  party_name: string | null; // 部隊名
  finished_at: string | null; // 帰還時刻（遠征時のみ）
  slot: { [key: string]: Slot };
}

const partyInitialState: Party = {
  party_no: '0',
  status: '1',
  party_name: '無名部隊',
  finished_at: null,
  slot: {
    1: { serial_id: null },
    2: { serial_id: null },
    3: { serial_id: null },
    4: { serial_id: null },
    5: { serial_id: null },
    6: { serial_id: null },
  },
};

export type Parties = { [key: string]: Party };

export const partiesInitialState: Parties = {
  1: partyInitialState,
  2: partyInitialState,
  3: partyInitialState,
  4: partyInitialState,
};
