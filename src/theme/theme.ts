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
      cursor: 'default',
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
      cursor: 'default',
  
    },
    h4: {
      fontSize: '20px',
      fontWeight: 'normal',
      cursor: 'default',
    },
    h5: {
      fontSize: '16px',
      fontWeight: 'normal',
      cursor: 'default',
    },
    h6: {
      fontSize: '10px',
      fontWeight: 'normal',
      cursor: 'default',
    },
    body1: {
      fontSize: '15px',
      fontWeight: 'normal',
      cursor: 'default',
    },
  },
  breakpoints: {
    values: {
      xs: 100,
      sm: 800,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme.typography.h1 = {
  fontFamily: 'Poppins',
  [theme.breakpoints.down("xs")]: {
    fontSize: '25px',    
  },
};
theme.typography.h2 = {
  fontFamily: 'Poppins',
};
theme.typography.h3 = {
  fontFamily: 'Poppins',
  [theme.breakpoints.down("xs")]: {
    fontSize: '12px',
  },
};
theme.typography.h4 = {
  fontFamily: 'Poppins',
  [theme.breakpoints.down("xs")]: {
    fontSize: '15px',
  },
};
theme.typography.h5 = {
  fontFamily: 'Poppins',
};
theme.typography.h6 = {
  fontFamily: 'Poppins',
};
theme.typography.body1 = {
  fontFamily: 'Poppins',
};