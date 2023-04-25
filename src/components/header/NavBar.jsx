import { List, ListItem, ListItemText } from '@mui/material';

const navItems = [
  'For passangers',
  'IEV Services',
  'VIP',
  'Corporate',
  'Press center',
  'UA',
];

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
