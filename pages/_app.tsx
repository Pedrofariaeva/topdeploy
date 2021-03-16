import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../theme/theme';
import '../public/global.css';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
