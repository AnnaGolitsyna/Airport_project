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

import SearchInput from '../searchInput/SearchInput';
import FlightTable from '../flightTable/FlightTable';
import FloatingActionButtonZoom from '../searchBar/test';
import SearchBar from '../searchBar/SearchBar';

const SearchFlights = () => {
  return (
    <Container>
      <Stack
        spacing={5}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" mt={10}>
          FLIGHT SEARCH
        </Typography>

        <SearchInput />

        <SearchBar />

        

        {/* <FlightTable /> */}

        {/* <FloatingActionButtonZoom /> */}
      </Stack>
    </Container>
  );
};

export default SearchFlights;
