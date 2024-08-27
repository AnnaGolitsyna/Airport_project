import { render, screen } from '@testing-library/react';
import FlightTable from './FlightTable';
import TableRowFlights from './TableRowFlights';
import TableBodyFlights from './TableBodyFlights';
import { testFilterArr, testRowList } from '../../../utils/testData';

describe('FlightTable', () => {
  test('FlightTable renders', () => {
    render(<FlightTable dataFlights={testFilterArr} />);
    expect(screen.getByRole('table')).toBeInTheDocument();
    const tableRow = screen.getAllByRole('row');
    expect(tableRow).toHaveLength(testFilterArr.length + 1);
  });

  test('TableRowFlights renders', () => {
    render(
      <TableRowFlights
        columnNamesList={testRowList}
        valueToOrderBy="dateExpected"
        orderDirection="asc"
        handleSort={jest.fn()}
      />
    );
    expect(screen.getByRole('row')).toBeInTheDocument();
  });

  test('TableBodyFlights renders', () => {
    render(<TableBodyFlights flights={testFilterArr} />);
    expect(screen.getByRole('rowgroup')).toBeInTheDocument();
  });
});
