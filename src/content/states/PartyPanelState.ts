export enum speedCorrect {
  none = 'none',
  normal = 'normal',
  stage7 = 'stage7',
}

export const getSpeedCorrect = (value: string): speedCorrect => {
  switch (value) {
    case speedCorrect.none:
      return speedCorrect.none;
    case speedCorrect.normal:
      return speedCorrect.normal;
    case speedCorrect.stage7:
      return speedCorrect.stage7;
    default:
      return speedCorrect.none;
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
  correct: speedCorrect;
  horseDisable: boolean;
  extendView: boolean;
  enableExtendView: boolean;
};

export const partyPanelInitialState: PartyPanelState = {
  textType: 0,
  correct: speedCorrect.none,
  horseDisable: false,
  extendView: false,
  enableExtendView: true,
};
