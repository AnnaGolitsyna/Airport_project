import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import SearchFlights from './searchFlights/SearchFlights';

const MainPage = () => {
  return (
    <>
      <Header />
      <SearchFlights />
      <Outlet />
    </>
  );
};

export default MainPage;
