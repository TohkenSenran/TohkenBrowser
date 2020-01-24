export enum windowMode {
  SEN = 'SEN',
  SHOU = 'SHOU',
  HYOU = 'HYOU',
}

export type BrowserSettingState = {
  mode: windowMode;
  mute: boolean;
  scale: number;
  devConnect: boolean;
  enableNotify: boolean;
  addCopyright: boolean;
};

export const setBrowserSetting =
  (
    scale: number = 0.75,
    mode: windowMode = windowMode.SHOU,
    mute: boolean = false,
    devConnect: boolean = false,
    enableNotify: boolean = true,
    addCopyright: boolean = false,

  ): BrowserSettingState =>
    ({
      mode,
      mute,
      scale,
      devConnect,
      enableNotify,
      addCopyright,
    });

export const browserSettingInitialState = setBrowserSetting();
