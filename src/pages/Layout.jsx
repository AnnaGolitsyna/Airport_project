import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import SearchFlights from '../flights/components/searchFlights/SearchFlights';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <SearchFlights />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
