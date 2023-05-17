import {
  Box,
  Container,
  Typography,
  TextField,
  Stack,
  Grid,
  Button,
  ButtonGroup,
} from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <NavLink>
          <Button >
            <FlightTakeoffIcon />
            Departure
          </Button>
        </NavLink>
      </Grid>
      <Grid item xs={6}>
        <NavLink>Arrival</NavLink>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" mt={10}>
          Date
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
