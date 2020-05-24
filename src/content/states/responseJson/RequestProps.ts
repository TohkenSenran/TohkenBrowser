// 取得可能性のあるRequestのプロパティ
export type RequestProps = {
  partyNo: string;
  episodeId: string;
  fieldId: string;
  slotNo: string;
  charcoal: number;
  steel: number;
  coolant: number;
  file: number;
  consumableId: string;
  useAssist: boolean;
  serialId: string;
  eventLayerId: string;
};

export const requestPropsInitialState: RequestProps = {
  partyNo: '0',
  episodeId: '0',
  fieldId: '0',
  slotNo: '0',
  charcoal: 0,
  steel: 0,
  coolant: 0,
  file: 0,
  consumableId: '0',
  useAssist: false,
  serialId: '0',
  eventLayerId: '0',
};
