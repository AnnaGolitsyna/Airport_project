import React from 'react';
import { Box, Container, Typography, Tabs, Tab } from '@mui/material';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { today, yesterday, tomorrow } from '../../utils/date';
import {
  StyledBox,
  StyledNavLink,
  StyledTypography,
  StyledIcon,
} from './styledComponnent';
import DatePickerFlights from './DatePickerFlights';


const SearchBar = () => {
  const [value, setValue] = React.useState(today.format('YYYY-MM-DD'));
  console.log(value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <StyledBox>
        <StyledNavLink to="departure" activeclassname="active">
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
        <DatePickerFlights />
        <Box sx={{ color: 'primary.main', margin: '0 10px' }}>
          {
            <>
              <Typography>{today.format('DD/MM')}</Typography>
              <EventRepeatIcon
                sx={{
                  fontSize: '3em',
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                }}
              />
            </>
          }
        </Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            value={yesterday.format('YYYY-MM-DD')}
            label={
              <>
                {yesterday.format('DD/MM')}
                <Typography>yesterday</Typography>
              </>
            }
          />
          <Tab
            value={today.format('YYYY-MM-DD')}
            label={
              <>
                {today.format('DD/MM')}
                <Typography>today</Typography>
              </>
            }
          />
          <Tab
            value={tomorrow.format('YYYY-MM-DD')}
            label={
              <>
                {tomorrow.format('DD/MM')}
                <Typography>tomorrow</Typography>
              </>
            }
          />
        </Tabs>

      </Box>
    </Container>
  );
};

export default SearchBar;
