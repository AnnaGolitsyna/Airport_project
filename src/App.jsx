import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import store from './store.js';
import { ThemeProvider } from '@mui/material';
import theme from './style/theme';
import { GlobalStyles } from '@mui/material';
import Layout from './pages/Layout.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import FlightContent from './pages/FlightContent.jsx';

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
              <Route index element={<Navigate to="departure" replace />} />
              <Route path=":type" element={<FlightContent />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
