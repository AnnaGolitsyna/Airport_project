import {
  AppBar,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import airportLogo from '../style/airportLogo.png';

const Header = () => {
  const navItems = [
    'For passangers',
    'IEV Services',
    'VIP',
    'Corporate',
    'Press center',
    'UA',
  ];
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

      <List
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'row',
          marginLeft: 'auto',
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemText primary={item} sx={{ textAlign: 'center' }} />
          </ListItem>
        ))}
      </List>
    </AppBar>
  );
};

export default Header;
