import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import theme from '../components/theme';
import { store } from '../store';

function MyApp(appProps: AppProps) {
  const { Component, pageProps } = appProps;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
