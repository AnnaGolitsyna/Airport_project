import React from 'react';
import {Navigate, Outlet } from 'react-router-dom';
//import Departure from './Departure'
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

//<Navigate to="departure" replace /> {<Departure />}