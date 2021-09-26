/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';

import { CssBaseline, useMediaQuery } from '@material-ui/core';
import { createTheme, ThemeProvider, Theme } from '@material-ui/core/styles';
import { toneMode } from './constants';
import { RootState } from './content/states';
import { HandbookState } from './handbook/states';

export interface CustomTheme extends Theme {
  tohkenPalette: {
    general: {
      textShadow: string;
      alertText: string;
    };
    partyPanel: {
      enseiText: string;
      syutsujinText: string;
      scoutHigh: string;
      scoutMiddle: string;
      scoutLow: string;
      sakuraText: string;
    };
    swordPanel: {
      background: string;
      fatigueLow: string;
      fatigueMiddle: string;
      fatigueHigh: string;
    };
    handbook: {
      redColumn: string;
      blueColumn: string;
      yellowColumn: string;
    };
  };
}

export function withRoot<P>(Component: React.ComponentType<P>): (props: P) => JSX.Element {
  const WithRoot = (props: P): JSX.Element => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    let colorTone = toneMode.LIGHT;
    try {
      colorTone = useSelector<RootState, toneMode>((state) => state.browserSetting.colorTone);
    } catch (error) {
      try {
        colorTone = useSelector<HandbookState, toneMode>((state) => state.tabMenu.colorTone);
      } catch (error2) {
        console.log('withRootError');
      }
    }
    // console.log('in WithRoot: ', colorTone);
    // console.log('setDarkMode in WithRoot: ', prefersDarkMode);
    let setDarkMode = false;
    switch (colorTone) {
      case toneMode.DARK:
        setDarkMode = true;
        break;
      case toneMode.LIGHT:
        setDarkMode = false;
        break;
      case toneMode.AUTO:
        setDarkMode = prefersDarkMode;
        break;
      default:
        setDarkMode = false;
    }

    const theme: Theme = React.useMemo(
      () =>
        createTheme({
          // Theme Colors
          palette: {
            type: setDarkMode ? 'dark' : 'light',
            primary: {
              // light: will be calculated from palette.primary.main,
              main: setDarkMode ? '#202020' : '#fafafa',
              // dark: will be calculated from palette.primary.main,
              // contrastText: will be calculated to contrast with palette.primary.main
              contrastText: setDarkMode ? '#f0f0f0' : '#616161',
            },
            secondary: {
              main: setDarkMode ? '#f0f0f0' : '#616161',
              contrastText: setDarkMode ? '#202020' : '#fafafa',
            },
            background: {
              default: setDarkMode ? '#202020' : '#fafafa',
            },
          },
          typography: {
            fontFamily: 'Noto Serif JP',
            fontSize: 14,
            fontWeightRegular: 600,
          },
          overrides: {
            MuiTooltip: {
              tooltip: {
                fontSize: 14,
              },
            },
          },
        }),
      [setDarkMode],
    );

    const customTheme: CustomTheme = React.useMemo(
      () => ({
        tohkenPalette: {
          general: {
            textShadow: 'rgba(255,255,255,0.75)',
            alertText: 'crimson',
          },
          partyPanel: {
            enseiText: '#9644E3',
            syutsujinText: '#A24E36',
            scoutHigh: 'crimson',
            scoutMiddle: 'darkorange',
            scoutLow: 'royalblue',
            sakuraText: 'deeppink',
          },
          swordPanel: {
            background: 'rgba(127, 127, 127, 0.25)',
            fatigueLow: 'red',
            fatigueMiddle: 'orange',
            fatigueHigh: setDarkMode ? '#954c93' : 'pink',
          },
          handbook: {
            redColumn: setDarkMode ? '#4b4648' : 'lavenderblush',
            blueColumn: setDarkMode ? '#46484b' : 'aliceblue',
            yellowColumn: setDarkMode ? '#4b4b46' : 'ivory',
          },
        },
        ...theme,
      }),
      [setDarkMode],
    );

    return (
      <ThemeProvider theme={customTheme}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:600&display=swap"
          rel="stylesheet"
        />
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  };

  return WithRoot;
}
