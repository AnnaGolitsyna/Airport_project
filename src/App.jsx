import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './style/theme';
import { GlobalStyles } from '@mui/material';
import Header from './components/header/Header';
import SearchFlights from './components/searchFlights/SearchFlights';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            body: {
              backgroundColor: theme.palette.background.default,
            },
          }}
        />
        <Header />
        <SearchFlights />
      </ThemeProvider>
    </>
  );
};

export default App;
