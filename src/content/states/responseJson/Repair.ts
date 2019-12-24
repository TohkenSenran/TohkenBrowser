export type Repair = {
  slot_no: string | number,
  sword_serial_id: string | number | null,
  push_serial_id: string | null,
  finished_at: string,
};

export const repairInitialState: Repair = {
  slot_no: '0',
  sword_serial_id: null,
  push_serial_id: null,
  finished_at: '',
};

export type Repairs = { [key: string]: Repair };
