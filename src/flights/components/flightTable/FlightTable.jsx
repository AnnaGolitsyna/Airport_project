import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { StyledTableRow, StyledTypography } from './styledComponnent';
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  Paper,
  CardMedia,
  Container,
} from '@mui/material';
import TableRowFlights from './TableRowFlights';

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
  const [valueToOrderBy, setValueToOrderBy] = useState('Schedule');

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


  const flights = sortedDataFlights(dataFlights, getComparator(orderDirection, valueToOrderBy))

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRowFlights
              data={columnNamesList}
              valueToOrderBy={valueToOrderBy}
              orderDirection={orderDirection}
              handleSort={handleSort}
            />
          </TableHead>

          <TableBody>
            {flights.map((flight) => (
              <StyledTableRow
                key={flight.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                hover={true}
              >
                <TableCell align="center">
                  <StyledTypography>{flight.terminal}</StyledTypography>
                </TableCell>
                <TableCell align="left">
                  {dayjs(flight.dateExpected).format('LT')}
                </TableCell>
                <TableCell align="left">{flight.city}</TableCell>
                <TableCell align="left">
                  {flight.date
                    ? `${flight.dateLabel} ${dayjs(flight.date).format('LT')}`
                    : 'Expected'}
                </TableCell>
                <TableCell align="left">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CardMedia
                      component="img"
                      sx={{ maxWidth: 50, mr: 2 }}
                      image={flight.airlineLogo}
                      alt="logo"
                    />
                    {flight.airlineName}
                  </Box>
                </TableCell>
                <TableCell align="left">{flight.codeShare}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

FlightTable.propTypes = {
  dataFlights: PropTypes.array.isRequired,
};

export default FlightTable;
