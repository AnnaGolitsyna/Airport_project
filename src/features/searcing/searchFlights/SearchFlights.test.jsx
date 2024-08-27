import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import SearchFlights from './SearchFlights';

const theme = createTheme();

test('renders "FLIGHT SEARCH" text', () => {
  render(
    <Router>
      <ThemeProvider theme={theme}>
        <SearchFlights />
      </ThemeProvider>
    </Router>
  );
  const linkElement = screen.getByText(/FLIGHT SEARCH/i);
  expect(linkElement).toBeInTheDocument();
});
