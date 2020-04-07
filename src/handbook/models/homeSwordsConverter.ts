/* eslint-disable @typescript-eslint/camelcase */
import { correctType, raritySlotNUmber, swordsProps } from '../../constants';
import { getFatigueCorrect, swordConverter } from '../../content/models/swordConverter';
import { Swords } from '../../content/states/responseJson/Sword';
import { HomeSwordsTableContents } from '../states/HomeSwordsTableContents';

const getCorrectedState = (
  state: number | string,
  selectCorrect: correctType,
  level: number | string,
  fatigue = 49,
): number => {
  const numberState = parseInt(state.toString(), 10);
  const numberLevel = parseInt(level.toString(), 10);

  switch (selectCorrect) {
    case correctType.none:
      return numberState;
    case correctType.normal:
      return Math.floor(numberState * (1.0 + numberLevel * 0.04) * getFatigueCorrect(fatigue));
    case correctType.stage7:
      return Math.floor(numberState * (1.0 + numberLevel * 0.02) * getFatigueCorrect(fatigue));
    default:
      return 0;
  }
};

export const homeSwordsConverter = (
  homeSwords: Swords,
  selectCorrect: correctType,
): HomeSwordsTableContents[] => {
  // console.log('homeSwords %o', homeSwords);
  const swords: Swords = homeSwords !== undefined ? homeSwords : {};
  const data: HomeSwordsTableContents[] = [];

  Object.values(swords).forEach((value) => {
    if (value.protect.toString() === '1') {
      const fatigue: number = swordConverter(swords, value.serial_id).fatigueValue;
      data.push({
        sword_id: parseInt(value.sword_id.toString(), 10),
        name: swordsProps[value.sword_id.toString()].name,
        swordType: swordsProps[value.sword_id.toString()].type,
        slotNumber: raritySlotNUmber[value.rarity],
        rarity: parseInt(value.rarity.toString(), 10), // レアリティ
        level: parseInt(value.level.toString(), 10), // レベル
        ranbu_level: parseInt(value.ranbu_level.toString(), 10), // 乱舞レベル
        exp: parseInt(value.exp.toString(), 10), // 経験値
        ranbu_exp: parseInt(value.ranbu_exp.toString(), 10), // 乱舞経験値
        hp: parseInt(value.hp.toString(), 10),
        hp_max: parseInt(value.hp_max.toString(), 10), // 最大HP
        atk: getCorrectedState(value.atk, selectCorrect, value.level, fatigue), // 打撃
        def: getCorrectedState(value.def, selectCorrect, value.level, fatigue), // 統率
        mobile: getCorrectedState(value.mobile, selectCorrect, value.level, fatigue), // 機動
        back: getCorrectedState(value.back, selectCorrect, value.level, fatigue), // 衝力
        scout: getCorrectedState(value.scout, selectCorrect, value.level, fatigue), // 偵察
        hide: getCorrectedState(value.hide, selectCorrect, value.level, fatigue), // 隠蔽
        loyalties: parseInt(value.loyalties.toString(), 10), // 必殺
        fatigue,
        created_at: value.created_at.toString().slice(0, 10), // 入手日時});
      });
    }
  });
  return data;
};
