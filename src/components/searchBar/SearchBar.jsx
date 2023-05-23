import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { today } from '../../utils/date';
import {
  StyledBox,
  StyledNavLink,
  StyledTypography,
  StyledIcon,
} from './styledComponnent';
import dayjs from 'dayjs';
import DatePickerFlights from './DatePickerFlights';
import DateSwitch from './DateSwitch';

const SearchBar = () => {
  const [date, setDate] = useState(dayjs(today));
  console.log('main', date);

  const handleChange = (event, newValue) => {
    setDate(newValue);
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
        <DatePickerFlights date={date} onChange={handleChange} />
        <DateSwitch value={date} onChange={handleChange} />
      </Box>
    </Container>
  );
};

export default SearchBar;
