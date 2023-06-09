import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { today } from '../../../utils/date';
import {
  StyledBox,
  StyledNavLink,
  StyledTypography,
  StyledIcon,
} from './styledComponnent';
import dayjs from 'dayjs';
import DatePickerFlights from './DatePickerFlights';
import DateSwitch from './DateSwitch';

const SearchDateBar = () => {
  const [date, setDate] = useState(dayjs(today));
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams((prevParams) => {
      return new URLSearchParams({
        ...Object.fromEntries(prevParams.entries()),
        date: date.format('DD-MM-YYYY'),
      });
    });
  }, [date, setSearchParams]);

  const handleChange = (event, newValue) => {
    setDate(newValue);
    setSearchParams({ date: newValue.format('DD-MM-YYYY') });
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

export default SearchDateBar;
