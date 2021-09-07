import { colorMode, windowMode } from '../../constants';

export type BrowserSettingState = {
  mode: windowMode;
  mute: boolean;
  scale: number;
  color: colorMode;
  devConnect: boolean;
  enableNotify: boolean;
  showCopyright: boolean;
};

export const setBrowserSetting = (
  mode: windowMode = windowMode.SHOU,
  mute = false,
  scale = 0.75,
  color = colorMode.LIGHT,
  devConnect = false,
  enableNotify = true,
  showCopyright = false,
): BrowserSettingState => ({
  mode,
  mute,
  scale,
  color,
  devConnect,
  enableNotify,
  showCopyright,
});

export const browserSettingInitialState = setBrowserSetting();
