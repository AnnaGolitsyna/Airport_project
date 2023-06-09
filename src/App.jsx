import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import store from './store.js';
import { ThemeProvider } from '@mui/material';
import theme from './style/theme';
import { GlobalStyles } from '@mui/material';
import Layout from './flights/pages/Layout';
import NotFoundPage from './flights/pages/NotFoundPage';
import Departure from './flights/pages/Departure';
import Arrival from './flights/pages/Arrival';

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
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="departure" element={<Departure />} />
              <Route path="arrival" element={<Arrival />} />
              <Route index element={<Navigate to="departure" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
