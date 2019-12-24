export type Resource = {
  bill: number, // 小判
  charcoal: number, // 木炭
  steel: number,　// 玉鋼
  coolant: number, // 冷却材
  file: number, // 砥石
  max_resource: number, // 各資源最大値
  recovered_at: string, // 更新日時
};

export const resourceInitialState: Resource = {
  bill: 0,
  charcoal: 0,
  steel: 0,
  coolant: 0,
  file: 0,
  max_resource: 0,
  recovered_at: '',
};
