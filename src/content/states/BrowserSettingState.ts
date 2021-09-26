import { toneMode, windowMode } from '../../constants';

export type BrowserSettingState = {
  mode: windowMode;
  mute: boolean;
  scale: number;
  colorTone: toneMode;
  devConnect: boolean;
  enableNotify: boolean;
  showCopyright: boolean;
};

export const setBrowserSetting = (
  mode: windowMode = windowMode.SHOU,
  mute = false,
  scale = 0.75,
  colorTone = toneMode.LIGHT,
  devConnect = false,
  enableNotify = true,
  showCopyright = false,
): BrowserSettingState => ({
  mode,
  mute,
  scale,
  colorTone,
  devConnect,
  enableNotify,
  showCopyright,
});

export const browserSettingInitialState = setBrowserSetting();
