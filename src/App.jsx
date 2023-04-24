import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './style/theme';
import Header from './components/Header';
import FlightSearch from './components/Search';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <FlightSearch />
      </ThemeProvider>
    </>
  );
};

export default App;
