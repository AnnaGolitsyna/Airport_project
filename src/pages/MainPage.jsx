import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchFlights from '../components/searchFlights/SearchFlights';

const MainPage = () => {
  return (
    <React.Fragment>

        <SearchFlights />
        <Outlet />

    </React.Fragment>
  );
};

export default MainPage;
