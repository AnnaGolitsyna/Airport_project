import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1eb7ee',
      dark: '#1976d2',
      contrastText: '#fff',
    },

    background: {
      default: '#e7efec',
      paper: '#fff',
    },
  },
});

export default theme;
