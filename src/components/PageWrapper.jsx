import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import SearchFlights from './searchFlights/SearchFlights';

const PageWrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
      <SearchFlights />
    </>
  );
};

export default PageWrapper;
