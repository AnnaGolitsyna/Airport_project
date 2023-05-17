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

import SearchInput from './SearchInput';
import FlightTable from './FlightTable';
import FloatingActionButtonZoom from './test';
import SearchBar from './SearchBar';

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

        <FlightTable />

        {/* <FloatingActionButtonZoom /> */}
      </Stack>
    </Container>
  );
};

export default SearchFlights;
