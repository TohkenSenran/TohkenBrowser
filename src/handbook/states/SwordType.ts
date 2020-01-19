export type SwordType = {
  tanto: boolean,
  wakizashi: boolean,
  uchigatana: boolean,
  tachi: boolean,
  odachi: boolean,
  yari: boolean,
  naginata: boolean,
  tsurugi: boolean,
};

export const initialSwordType = {
  tanto: false,
  wakizashi: false,
  uchigatana: false,
  tachi: false,
  odachi: false,
  yari: false,
  naginata: false,
  tsurugi: false,
};

export enum swordTypeName {
  tanto = '鍛刀',
  wakizashi = '脇差',
  uchigatana = '打刀',
  tachi = '太刀',
  odachi = '大太刀',
  yari = '槍',
  naginata = '薙刀',
  tsurugi = '剣',
}
