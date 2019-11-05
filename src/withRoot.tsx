import * as React from 'react';

// 任意の Theme Colors
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';

const theme: Theme = createMuiTheme({
  // Theme Colors
  palette: {
    primary: {
      main: '#fafafa',
      contrastText: '#616161',
    },
    secondary: {
      main: '#616161',
      contrastText: '#fafafa',
    },
    background: {
      paper: '#fafafa',
    },
  },
  typography: {
    fontFamily: 'Noto Serif JP',
    fontWeightRegular: 600,
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: 14,
      },
    },
  },
});

function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    return (
      <MuiThemeProvider theme={theme}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:600&display=swap" rel="stylesheet" />
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }
  return WithRoot;
}

export default withRoot;
