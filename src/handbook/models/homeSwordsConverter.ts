import { raritySlotNUmber, swordProps } from '../../constants';
import { Swords } from '../../content/states/responseJson/Sword';
import { HomeSwordsTableContents } from '../states/HomeSwordsTableContents';

export const homeSwordsConverter = (homeSwords: Swords): HomeSwordsTableContents[] => {
  const swords: Swords = (homeSwords !== undefined) ? homeSwords : {};
  const data: HomeSwordsTableContents[] = [];
  Object.entries(swords).forEach(([key, value]) => {
    if (value.protect.toString() === '1') {
      data.push({
        name: swordProps[value.sword_id].name,
        slotNumber: raritySlotNUmber[value.rarity],
        rarity: parseInt(value.rarity.toString(), 10), // レアリティ
        level: parseInt(value.level.toString(), 10), // レベル
        ranbu_level: parseInt(value.ranbu_level.toString(), 10), // 乱舞レベル
        exp: parseInt(value.exp.toString(), 10), // 経験値
        ranbu_exp: parseInt(value.ranbu_exp.toString(), 10), // 乱舞経験値
        hp: parseInt(value.hp.toString(), 10),
        hp_max: parseInt(value.hp_max.toString(), 10), // 最大HP
        atk: parseInt(value.atk.toString(), 10), // 打撃 *男子自身の値，刀装・馬の補正無し
        def: parseInt(value.def.toString(), 10), // 統率 *男子自身の値，刀装・馬の補正無し
        mobile: parseInt(value.mobile.toString(), 10), // 機動 *男子自身の値，刀装・馬の補正無し
        back: parseInt(value.back.toString(), 10), // 衝力 *男子自身の値，刀装・馬の補正無し
        scout: parseInt(value.scout.toString(), 10), // 偵察 *男子自身の値，刀装・馬の補正無し
        hide: parseInt(value.hide.toString(), 10), // 隠蔽 *男子自身の値，刀装・馬の補正無し
        loyalties: parseInt(value.loyalties.toString(), 10), // 必殺
        fatigue: parseInt(value.fatigue.toString(), 10), // 疲労値 *50<=桜，20>疲労中，5>疲労大
        created_at: value.created_at.toString(), // 入手日時});
      });
    }
  });
  return data;
};
