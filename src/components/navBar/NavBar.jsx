import StyledBox from './styledComponnent';
import { NavLink } from 'react-router-dom';

const navList = [
  'For passanger',
  'IEV Services',
  'VIP',
  'Corporate',
  'Press center',
  'UA',
];

const preventDefault = (event) => event.preventDefault();

const NavBar = () => {
  return (
    <StyledBox sx={{ typography: 'body1' }} onClick={preventDefault}>
      {navList.map((navName, ind) => (
        <NavLink key={navName} to={`/later`}>
          {navName}
        </NavLink>
      ))}
    </StyledBox>
  );
};

export default NavBar;
