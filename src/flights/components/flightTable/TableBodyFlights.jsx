import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { StyledTableRow, StyledTypography } from './styledComponnent';
import { Box, TableBody, TableCell, CardMedia } from '@mui/material';

const TableBodyFlights = ({ flights }) => {
  return (
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
  );
};

TableBodyFlights.propTypes = {
  flights: PropTypes.array.isRequired,
};

export default TableBodyFlights;
