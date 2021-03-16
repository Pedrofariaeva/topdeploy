import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4D4D4D',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontSize: '40px',
      fontWeight: 'normal',
    },
    h2: {
      fontSize: '20px',
      fontWeight: 'normal',
      '&:hover': {
        cursor: 'pointer',
        color: '#225890',
      },
    },
    h3: {
      fontSize: '20px',
      fontWeight: 'normal',
    },
    h4: {
      fontSize: '20px',
      fontWeight: 'normal',
    },
    h5: {
      fontSize: '14px',
      fontWeight: 'normal',
    },
    h6: {
      fontSize: '10px',
      fontWeight: 'normal',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
