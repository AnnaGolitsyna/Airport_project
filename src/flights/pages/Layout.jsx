import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import SearchFlights from '../components/searchFlights/SearchFlights';


const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <SearchFlights />
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
