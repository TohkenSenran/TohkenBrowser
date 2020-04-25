// 取得可能性のあるRequestのプロパティ
export type RequestProps = {
  partyId: string;
  episodeId: string;
  fieldId: string;
  slotId: string;
  charcoal: number;
  steel: number;
  coolant: number;
  file: number;
  consumableId: string;
  useAssist: boolean;
  serialId: string;
};

export const requestPropsInitialState: RequestProps = {
  partyId: '0',
  episodeId: '0',
  fieldId: '0',
  slotId: '0',
  charcoal: 0,
  steel: 0,
  coolant: 0,
  file: 0,
  consumableId: '0',
  useAssist: false,
  serialId: '0',
};
