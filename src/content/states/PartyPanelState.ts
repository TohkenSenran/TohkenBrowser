import { correctType, statusType } from '../../constants';

export const getSpeedCorrect = (value: string): correctType => {
  switch (value) {
    case correctType.none:
      return correctType.none;
    case correctType.normal:
      return correctType.normal;
    case correctType.stage7:
      return correctType.stage7;
    default:
      return correctType.none;
  }
};

export type PartyPanelState = {
  textType: number;
  correct: correctType;
  horseDisable: boolean;
  enableExtendView: boolean;
  selectViewStatus: boolean[];
};

const initialSelectViewStatus = (): boolean[] => {
  const viewStatus: boolean[] = [];
  Object.entries(statusType).forEach(([key, value]) => {
    if (typeof value === 'number') {
      viewStatus.push(true);
    }
  });
  return viewStatus;
};

export const partyPanelInitialState: PartyPanelState = {
  textType: 0,
  correct: correctType.none,
  horseDisable: false,
  enableExtendView: true,
  selectViewStatus: initialSelectViewStatus(),
};
