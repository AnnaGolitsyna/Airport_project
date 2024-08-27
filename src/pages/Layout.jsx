import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import SearchFlights from '../features/searcing';

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
