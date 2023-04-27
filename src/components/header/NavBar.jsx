import { Box } from '@mui/material';

import { NavLink } from 'react-router-dom';

const preventDefault = (event) => event.preventDefault();

const NavBar = () => {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'row',
        marginLeft: 'auto',
        alignItems: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
        '& a': {
          color: '#fff',
          textDecoration: 'none',
        },
      }}
      onClick={preventDefault}
    >
      <NavLink to="/later">For passanger</NavLink>
      <NavLink to="/later1">IEV Services</NavLink>
      <NavLink to="/later2">VIP</NavLink>
      <NavLink to="/later3">Corporate</NavLink>
      <NavLink to="/later4">Press center</NavLink>
      <NavLink to="/later5">UA</NavLink>
    </Box>
  );
};

export default NavBar;
