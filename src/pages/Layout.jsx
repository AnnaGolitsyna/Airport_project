import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
