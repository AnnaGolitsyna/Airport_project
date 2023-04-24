import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1eb7ee',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    // background: {
    //   default: "#e7efec"
    // }
  },
  breakpoints: {
    values: {
      md: 900,
    },
  },
});

export default theme;

//  background-color: #e7efec;
