import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from './NavBar';

const theme = createTheme();

describe('render NavList', () => {
  test("renders name 'Press center'", () => {
    render(
      <Router>
        <ThemeProvider theme={theme}>
          <NavBar />
        </ThemeProvider>
      </Router>
    );

    expect(screen.getByText('Press center')).toBeInTheDocument();
  });
});
