import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableSortLabel } from '@mui/material';
import { StyledTableCell } from './styledComponnent';

const TableRowFlights = ({
  columnNamesList,
  valueToOrderBy,
  orderDirection,
  handleSort,
}) => {
  const createSortHandler = (property) => (event) => {
    handleSort(event, property);
  };

  return (
    <TableRow>
      {columnNamesList.map((el) => {
        const key = Object.keys(el)[0];
        const label = el[key];
        return (
          <StyledTableCell align="left" key={key}>
            <TableSortLabel
              active={valueToOrderBy === key}
              direction={valueToOrderBy === key ? orderDirection : 'asc'}
              onClick={createSortHandler(key)}
            >
              {label}
            </TableSortLabel>
          </StyledTableCell>
        );
      })}
    </TableRow>
  );
};

TableRowFlights.propTypes = {
  columnNamesList: PropTypes.array.isRequired,
  valueToOrderBy: PropTypes.string.isRequired,
  orderDirection: PropTypes.string.isRequired,
  handleSort: PropTypes.func.isRequired,
};

export default TableRowFlights;
