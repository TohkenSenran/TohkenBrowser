/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';

import { CssBaseline, useMediaQuery } from '@material-ui/core';
import { createTheme, ThemeProvider, Theme } from '@material-ui/core/styles';

import { RootState } from './content/states/index';
import { colorMode } from './constants';

export function withRoot<P>(Component: React.ComponentType<P>): (props: P) => JSX.Element {
  const WithRoot = (props: P): JSX.Element => {
    // const color = useSelector<RootState, colorMode>((state) => state.browserSetting.color);
    // console.log('in WithReact: ',color);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    // console.log('prefersDarkMode: ', prefersDarkMode);
    const theme: Theme = React.useMemo(
      () =>
        createTheme({
          // Theme Colors
          palette: {
            type: prefersDarkMode ? 'dark' : 'light',
            primary: {
              // light: will be calculated from palette.primary.main,
              main: prefersDarkMode ? '#202020' : '#fafafa',
              // dark: will be calculated from palette.primary.main,
              // contrastText: will be calculated to contrast with palette.primary.main
              contrastText: prefersDarkMode ? '#f0f0f0' : '#616161',
            },
            secondary: {
              main: prefersDarkMode ? '#f0f0f0' : '#616161',
              contrastText: prefersDarkMode ? '#202020' : '#fafafa',
            },
            background: {
              default: prefersDarkMode ? '#202020' : '#fafafa',
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
      [prefersDarkMode],
    );

    return (
      <ThemeProvider theme={theme}>
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
