export type Sword = {
  [key: string]: string | number | null;
  serial_id: string | number; // 男子個別のID
  sword_id: string | number; // 刀剣の種類 *極は別ID
  symbol: string | number; // 極の判定 *通常1，極2
  rarity: string | number; // レアリティ
  level: string | number; // レベル
  ranbu_level: string | number; // 乱舞レベル
  exp: string | number; // 経験値
  ranbu_exp: string | number; // 乱舞経験値
  special_voice_status: string | number; // 乱舞レベルで解放されたボイスの状態
  evol_num: string | number; // 特の段階：極は別種類扱い, 髭切，膝丸は絵が変わるため別扱いで変化後0
  hp: string | number; // 現在のHP
  hp_max: string | number; // 最大HP
  atk: string | number; // 打撃 *男子自身の値，刀装・馬の補正無し
  def: string | number; // 統率 *男子自身の値，刀装・馬の補正無し
  mobile: string | number; // 機動 *男子自身の値，刀装・馬の補正無し
  back: string | number; // 衝力 *男子自身の値，刀装・馬の補正無し
  scout: string | number; // 偵察 *男子自身の値，刀装・馬の補正無し
  hide: string | number; // 隠蔽 *男子自身の値，刀装・馬の補正無し
  hp_up: string | number; // HPの伸びしろ
  atk_up: string | number; // 打撃の伸びしろ
  def_up: string | number; // 統率の伸びしろ
  mobile_up: string | number; // 機動の伸びしろ
  back_up: string | number; // 衝力の伸びしろ
  scout_up: string | number; // 偵察の伸びしろ
  hide_up: string | number; // 隠蔽の伸びしろ
  loyalties: string | number; // 必殺
  fatigue: string | number; // 疲労値 *50<=桜，20>疲労中，5>疲労大
  equip_serial_id1: string | number | null; // 刀装ID1
  equip_serial_id2: string | number | null; // 刀装ID2
  equip_serial_id3: string | number | null; // 刀装ID3
  horse_serial_id: string | number | null; // 馬ID
  item_id: string | number | null; // お守りID
  protect: string | number;　// 保護の有無
  status: string | number; // 状態 *0:通常状態、1:手入れ状態
  recovered_at: string | number; // 最終更新日時
  created_at: string | number; // 入手日時
}

export const swordInitialState: Sword = {
  serial_id: '0',
  sword_id: '0',
  symbol: '1',
  rarity: '1',
  level: '0',
  ranbu_level: '0',
  exp: '0',
  ranbu_exp: '0',
  special_voice_status: '0',
  evol_num: '0',
  hp: '1',
  hp_max: '1',
  atk: '0',
  def: '0',
  mobile: '0',
  back: '0',
  scout: '0',
  hide: '0',
  hp_up: '0',
  atk_up: '0',
  def_up: '0',
  mobile_up: '0',
  back_up: '0',
  scout_up: '0',
  hide_up: '0',
  loyalties: '0',
  fatigue: '49',
  equip_serial_id1: null,
  equip_serial_id2: null,
  equip_serial_id3: null,
  horse_serial_id: null,
  item_id: null,
  protect: '0',
  status: '0',
  recovered_at: '0',
  created_at: '0',
};

export type Swords = { [key: string]: Sword };
