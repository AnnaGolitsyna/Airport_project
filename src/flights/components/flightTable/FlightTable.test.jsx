import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TableRowFlights from './TableRowFlights';
import TableBodyFlights from './TableBodyFlights';
import { testFilterArr, testRowList } from '../../../utils/testData';

const theme = createTheme();

describe('FlightTable', () => {
  test('TableRowFlights render', () => {
    render(
      <Router>
        <ThemeProvider theme={theme}>
          <TableRowFlights
            columnNamesList={testRowList}
            valueToOrderBy="dateExpected"
            orderDirection="asc"
            handleSort={jest.fn()}
          />
        </ThemeProvider>
      </Router>
    );
    expect(screen.getByRole('row')).toBeInTheDocument();
  });

  test('TableBodyFlights render', () => {
    render(
      <Router>
        <ThemeProvider theme={theme}>
          <TableBodyFlights flights={testFilterArr} />
        </ThemeProvider>
      </Router>
    );
    expect(screen.getByRole('rowgroup')).toBeInTheDocument();
  });
});
