import { styled } from '@mui/material/styles';
import { TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.default,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
  },
}));
export { StyledTableRow, StyledTableCell };