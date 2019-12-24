export type Equip = {
  serial_id: string | number; // 刀装固有のID
  equip_id: string | number; // 刀装・馬の種類
  soldier: string | number;　// 兵数
  priority: number; // 未使用？
};

export const equipInitialState: Equip = {
  serial_id: '0',
  equip_id: '0',
  soldier: '0',
  priority: 0,
}

export type Equips = { [key: string]: Equip };
