import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './style/theme';
import { GlobalStyles } from '@mui/material';
import Header from './components/Header';
import Search from './components/Search';

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
        <Search />
      </ThemeProvider>
    </>
  );
};

export default App;
