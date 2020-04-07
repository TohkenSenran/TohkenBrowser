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

export const setBrowserSetting = (
  scale = 0.75,
  mode: windowMode = windowMode.SHOU,
  mute = false,
  devConnect = false,
  enableNotify = true,
  addCopyright = false,
): BrowserSettingState => ({
  mode,
  mute,
  scale,
  devConnect,
  enableNotify,
  addCopyright,
});

export const browserSettingInitialState = setBrowserSetting();
