import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableSortLabel } from '@mui/material';
import { StyledTableCell } from './styledComponnent';

const TableRowFlights = ({ data }) => {
  const createSortHandler = (field) => {
    console.log(field);
  };
  return (
    <TableRow>
      {data.map((el) => {
        return (
          <StyledTableCell align="left" key={el}>
            <TableSortLabel
              active={el === 'Schedule'}
              direction="asc"
              onClick={createSortHandler('Schedule')}
            >
              {el}
            </TableSortLabel>
          </StyledTableCell>
        );
      })}
    </TableRow>
  );
};

TableRowFlights.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableRowFlights;
