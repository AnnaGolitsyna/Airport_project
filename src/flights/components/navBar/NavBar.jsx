import StyledBox from './styledComponnent';
import { NavLink } from 'react-router-dom';

const preventDefault = (event) => event.preventDefault();

const NavBar = () => {
  return (
    <StyledBox sx={{ typography: 'body1' }} onClick={preventDefault}>
      <NavLink to="/later">For passanger</NavLink>
      <NavLink to="/later1">IEV Services</NavLink>
      <NavLink to="/later2">VIP</NavLink>
      <NavLink to="/later3">Corporate</NavLink>
      <NavLink to="/later4">Press center</NavLink>
      <NavLink to="/later5">UA</NavLink>
    </StyledBox>
  );
};

export default NavBar;
