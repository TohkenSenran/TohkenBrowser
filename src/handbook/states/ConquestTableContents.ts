export type ConquestTableContents = {
  age: string;
  destination: string;
  time: string;
  totalLv: number;
  requireSwords: string;
  swordExp: number;
  userExp: string;
  charcoal: string;
  steel: string;
  coolant: string;
  file: string;
  item: string;
  greatAdd: string;
  seasonReward: string;
};

export const conquestTableContentsInitialState: ConquestTableContents = {
  age: '不明時代',
  destination: '不明地',
  time: '0:00',
  totalLv: 0,
  requireSwords: '自由',
  swordExp: 0,
  userExp: '0 (0)',
  charcoal: '0 (0)',
  steel: '0 (0)',
  coolant: '0 (0)',
  file: '0 (0)',
  item: '不明',
  greatAdd: '不明',
  seasonReward: '不明',
};
