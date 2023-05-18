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
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { styled } from '@mui/system';
import React from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

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

// function styledProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

const SearchBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const today = moment();
  const yesterday = moment().subtract(1, 'day');
  const tomorrow = moment().add(1, 'day');

  return (
    <Container>
      <StyledBox>
        <StyledNavLink to="departure" activeClassName="active">
          <StyledTypography>
            <StyledIcon component={FlightTakeoffIcon} />
            DEPARTURE
          </StyledTypography>
        </StyledNavLink>
        <StyledNavLink to="arrival">
          <StyledTypography>
            <StyledIcon component={FlightLandIcon} />
            ARRIVAL
          </StyledTypography>
        </StyledNavLink>
      </StyledBox>
      <Box sx={{ display: 'flex', width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label={
              <>
                <Typography sx={{ fontSize: '1em', color: 'primary.main' }}>
                  {today.format('DD/MM')}
                </Typography>

                <EventRepeatIcon
                  sx={{
                    fontSize: '2.5em',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                  }}
                />
              </>
            }
            // {...styledProps(0)}
          />
          <Tab
            label={
              <>
                {yesterday.format('DD/MM')}
                <Typography>yesterday</Typography>
              </>
            }
            // {...styledProps(1)}
          />
          <Tab
            label={
              <>
                {today.format('DD/MM')}
                <Typography>today</Typography>
              </>
            }
            // {...styledProps(2)}
          />
          <Tab
            label={
              <>
                {tomorrow.format('DD/MM')}
                <Typography>tomorrow</Typography>
              </>
            }
            // {...styledProps(2)}
          />
        </Tabs>
      </Box>
    </Container>
  );
};

export default SearchBar;
