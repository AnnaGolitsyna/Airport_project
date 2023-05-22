import { dataFlights } from '../../gateway/data';

import * as React from 'react';
import moment from 'moment/moment';
import { StyledTableRow, StyledTableCell } from './styledComponnent';
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  CardMedia,
  Container,
} from '@mui/material';

export default function FlightTable() {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Terminal</StyledTableCell>
              <StyledTableCell align="left">Schedule</StyledTableCell>
              <StyledTableCell align="left">Direction</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Airline</StyledTableCell>
              <StyledTableCell align="left">Flight</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataFlights.map((flight) => (
              <StyledTableRow
                key={flight.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                hover={true}
              >
                <TableCell align="center">{flight.terminal}</TableCell>
                <TableCell align="left">
                  {moment(flight.arrivalDateExpected).format('LT')}
                </TableCell>
                <TableCell align="left">{flight.arrivalCity}</TableCell>
                <TableCell align="left">
                  {moment(flight.arrivalDate).format('LT')}
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
}