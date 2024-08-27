import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableContainer,
  TableHead,
  Paper,
  Container,
} from '@mui/material';
import TableRowFlights from './TableRowFlights';
import TableBodyFlights from './TableBodyFlights';

const columnNamesList = [
  { terminal: 'Terminal' },
  { dateExpected: 'Schedule' },
  { city: 'Direction' },
  { date: 'Status' },
  { airlineName: 'Airline' },
  { codeShare: 'Flight' },
];

const FlightTable = ({ dataFlights }) => {
  const [orderDirection, setOrderDirection] = useState('asc');
  const [valueToOrderBy, setValueToOrderBy] = useState('dateExpected');

  const handleSort = (event, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === 'asc';
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? 'desc' : 'asc');
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const sortedDataFlights = (array, comparator) => {
    const stabilizedArray = array.map((el, ind) => [el, ind]);
    stabilizedArray.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedArray.map((el) => el[0]);
  };

  const flights = sortedDataFlights(
    dataFlights,
    getComparator(orderDirection, valueToOrderBy)
  );

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRowFlights
              columnNamesList={columnNamesList}
              valueToOrderBy={valueToOrderBy}
              orderDirection={orderDirection}
              handleSort={handleSort}
            />
          </TableHead>

          <TableBodyFlights flights={flights} />
        </Table>
      </TableContainer>
    </Container>
  );
};

FlightTable.propTypes = {
  dataFlights: PropTypes.array.isRequired,
};

export default FlightTable;
