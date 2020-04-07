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
  statusType: number;
  correct: correctType;
  horseDisable: boolean;
  enableExtendView: boolean;
  displayedStatus: boolean[];
};

const initialDisplayedStatus = (): boolean[] => {
  const viewStatus: boolean[] = [];
  Object.values(statusType).forEach((value) => {
    if (typeof value === 'number') {
      viewStatus.push(true);
    }
  });
  return viewStatus;
};

export const partyPanelInitialState: PartyPanelState = {
  statusType: 0,
  correct: correctType.none,
  horseDisable: false,
  enableExtendView: true,
  displayedStatus: initialDisplayedStatus(),
};
