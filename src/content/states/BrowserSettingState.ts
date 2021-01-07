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
  showCopyright: boolean;
};

export const setBrowserSetting = (
  scale = 0.75,
  mode: windowMode = windowMode.SHOU,
  mute = false,
  devConnect = false,
  enableNotify = true,
  showCopyright = false,
): BrowserSettingState => ({
  mode,
  mute,
  scale,
  devConnect,
  enableNotify,
  showCopyright,
});

export const browserSettingInitialState = setBrowserSetting();
