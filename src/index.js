import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from '@mui/material';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles
      styles={{
        body: {
          backgroundColor: '#e7efec',
        },
      }}
    />
    <App />
  </React.StrictMode>
);


