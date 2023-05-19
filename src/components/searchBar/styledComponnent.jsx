import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  TextField,
  Stack,
  Grid,
  Button,
  ButtonGroup,
} from '@mui/material';

import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  textDecoration: 'none',
  backgroundColor: theme.palette.primary.main,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  padding: '10px',
  color: theme.palette.primary.contrastText,
  '&.active': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  [theme.breakpoints.up('sm')]: {
    fontSize: 25,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 30,
  },
}));

const StyledIcon = styled(({ component: Component, ...rest }) => (
  <Component {...rest} />
))(({ theme }) => ({
  fontSize: 20,
  paddingRight: '5px',
  [theme.breakpoints.up('sm')]: {
    fontSize: 24,
    paddingRight: '10px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 32,
    paddingRight: '15px',
  },
}));

export { StyledBox, StyledNavLink, StyledTypography, StyledIcon };
