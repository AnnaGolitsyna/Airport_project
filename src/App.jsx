import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './style/theme';
import { GlobalStyles } from '@mui/material';
import NotFoundPage from './components/pages/NotFoundPage';
import MainPage from './components/MainPage.jsx';



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
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
