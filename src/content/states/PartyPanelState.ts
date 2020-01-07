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

export const getTextType = (index: number): textType => {
  switch (index) {
    case 0:
      return textType.none;
    case 1:
      return textType.hp;
    case 2:
      return textType.atk;
    case 3:
      return textType.def;
    case 4:
      return textType.mobile;
    case 5:
      return textType.back;
    case 6:
      return textType.scout;
    case 7:
      return textType.hide;
    case 8:
      return textType.loyalties;
    case 9:
      return textType.fatigue;
    case 10:
      return textType.amulet;
    default:
      return textType.none;
  }
};

export type PartyPanelState = {
  textType: number;
  correct: speedCorrect;
  horseDisable: boolean;
  extendView: boolean;
  enableMemberStateView: boolean;
};

export const partyPanelInitialState: PartyPanelState = {
  textType: 0,
  correct: speedCorrect.none,
  horseDisable: false,
  extendView: false,
  enableMemberStateView: true,
};
