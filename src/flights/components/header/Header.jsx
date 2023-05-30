import { AppBar, Box, Toolbar } from '@mui/material';
import NavBar from '../navBar/NavBar';
import airportLogo from '../../../style/airportLogo.png';

const Header = () => {
  return (
    <AppBar position="static" sx={{ display: 'flex', flexDirection: 'row' }}>
      <Toolbar ml={1}>
        <Box
          component="img"
          sx={{ maxWidth: 125 }}
          src={airportLogo}
          alt="airports logo"
        />
      </Toolbar>
      <NavBar />
    </AppBar>
  );
};

export default Header;
