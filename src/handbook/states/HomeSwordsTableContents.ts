export type HomeSwordsTableContents = {
  sword_id: number; // 刀剣の種類 *極は別ID
  name: string;
  swordType: string;
  slotNumber: number; // スロット数
  rarity: number; // レアリティ
  level: number; // レベル
  ranbu_level: number; // 乱舞レベル
  exp: number; // 経験値
  ranbu_exp: number; // 乱舞経験値
  hp: number; // HP
  hp_max: number; // 最大HP
  atk: number; // 打撃 *男子自身の値，刀装・馬の補正無し
  def: number; // 統率 *男子自身の値，刀装・馬の補正無し
  mobile: number; // 機動 *男子自身の値，刀装・馬の補正無し
  back: number; // 衝力 *男子自身の値，刀装・馬の補正無し
  scout: number; // 偵察 *男子自身の値，刀装・馬の補正無し
  hide: number; // 隠蔽 *男子自身の値，刀装・馬の補正無し
  loyalties: number; // 必殺
  fatigue: number; // 疲労値 *50<=桜，20>疲労中，5>疲労大
  created_at: string; // 入手日時
};

export const homeSwordsTableContentsInitialState: HomeSwordsTableContents = {
  sword_id: 0, // 刀剣の種類 *極は別ID
  name: '不明',
  swordType: '不明',
  slotNumber: 1,
  rarity: 1, // レアリティ
  level: 1, // レベル
  ranbu_level: 1, // 乱舞レベル
  exp: 0, // 経験値
  ranbu_exp: 0, // 乱舞経験値
  hp: 1,
  hp_max: 1, // 最大HP
  atk: 1, // 打撃 *男子自身の値，刀装・馬の補正無し
  def: 1, // 統率 *男子自身の値，刀装・馬の補正無し
  mobile: 1, // 機動 *男子自身の値，刀装・馬の補正無し
  back: 1, // 衝力 *男子自身の値，刀装・馬の補正無し
  scout: 1, // 偵察 *男子自身の値，刀装・馬の補正無し
  hide: 1, // 隠蔽 *男子自身の値，刀装・馬の補正無し
  loyalties: 1, // 必殺
  fatigue: 1, // 疲労値 *50<=桜，20>疲労中，5>疲労大
  created_at: '2014-01-01 00:00:00', // 入手日時
};
