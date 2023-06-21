import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextBeforeWar from './TextBeforeWar';

const theme = createTheme();

test('renders "There is no such flight" text', () => {
  const testDate = '22.01.22';
  render(
    <Router>
      <ThemeProvider theme={theme}>
        <TextBeforeWar date={testDate} />
      </ThemeProvider>
    </Router>
  );
  const linkElement = screen.getByText(`There is no such flight on ${testDate}`);
  expect(linkElement).toBeInTheDocument();
});
