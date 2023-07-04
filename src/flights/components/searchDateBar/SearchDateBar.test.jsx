import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import dayjs from 'dayjs';
import SearchDateBar from './SearchDateBar';
import DateSwitch from './DateSwitch';
import DatePickerFlights from './DatePickerFlights';

const theme = createTheme();

describe('SearchDateBar componnent', () => {
  const date = dayjs();
  const handleChange = jest.fn();

  test('renders DEPARTURE and ARRIVAL tabs', () => {
    render(
      <Router>
        <ThemeProvider theme={theme}>
          <SearchDateBar />
        </ThemeProvider>
      </Router>
    );

    expect(screen.getByText(/DEPARTURE/i)).toBeInTheDocument();
    expect(screen.getByText(/ARRIVAL/i)).toBeInTheDocument();
  });

  describe('DateSwitch component', () => {
    test('renders date correctly', () => {
      render(
        <Router>
          <DateSwitch value={date} onChange={handleChange} />
        </Router>
      );

      expect(screen.getByText(date.format('DD/MM'))).toBeInTheDocument();
      expect(screen.getByRole('tablist')).toBeInTheDocument();
    });

    test('calls onChange', () => {
      render(
        <Router>
          <DateSwitch value={date} onChange={handleChange} />
        </Router>
      );

      fireEvent.click(screen.getByText(date.format('DD/MM')));
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('DatePickerFlights component', () => {
    test('renders date and icon', () => {
      render(
        <Router>
          <ThemeProvider theme={theme}>
            <DatePickerFlights date={date} onChange={handleChange} />
          </ThemeProvider>
        </Router>
      );

      expect(screen.getByText(date.format('DD/MM'))).toBeInTheDocument();
      expect(screen.getByTestId('event-icon')).toBeInTheDocument();
    });
  });
});
