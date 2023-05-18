import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './style/theme';
import { GlobalStyles } from '@mui/material';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import Departure from './pages/Departure';
import Arrival from './pages/Arrival';



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
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />}>
              <Route path="departure" element={<Departure />} />
              <Route path="arrival" element={<Arrival />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
