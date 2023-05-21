import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchFlights from '../components/searchFlights/SearchFlights';
import { Container } from '@mui/material';

const MainPage = () => {
  return (
    <React.Fragment>
      <Container>
        <SearchFlights />
        <Outlet />
      </Container>
    </React.Fragment>
  );
};

export default MainPage;
