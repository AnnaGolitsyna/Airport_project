import { styled } from '@mui/system';
import { Box } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  flexDirection: 'row',
  marginLeft: 'auto',
  alignItems: 'center',

  '& > :not(style) + :not(style)': {
    marginLeft: '20px',
  },
  '& a': {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
}));

export default StyledBox;
