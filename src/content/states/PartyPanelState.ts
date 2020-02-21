import { correctType } from '../../constants';

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

export enum textType {
  none,
  hp,
  atk,
  def,
  mobile,
  back,
  scout,
  hide,
  loyalties,
  fatigue,
  amulet,
}

export type PartyPanelState = {
  textType: number;
  correct: correctType;
  horseDisable: boolean;
  enableExtendView: boolean;
  selectViewStatus: boolean[];
};

export const initialSelectViewStatus = (): boolean[] => {
  const viewStatus: boolean[] = [];
  Object.entries(textType).forEach(([key, value]) => {
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
