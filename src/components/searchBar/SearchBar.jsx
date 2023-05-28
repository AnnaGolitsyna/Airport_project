import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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

  const [searchParams, setSearchParams] = useSearchParams();
  // {    date: date.format('DD-MM-YYYY'),  }

  //console.log('main', date, date.format('DD-MM-YYYY'), searchParams);

  useEffect(() => {
    console.log('date', Object.entries(searchParams));
    searchParams.set('date', date.format('DD-MM-YYYY'));
    setSearchParams(searchParams);
  }, [searchParams]);



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

export default SearchBar;
