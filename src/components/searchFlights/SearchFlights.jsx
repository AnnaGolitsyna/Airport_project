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
import FloatingActionButtonZoom from './test'

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

        <FlightTable />

        {/* <FloatingActionButtonZoom /> */}
      </Stack>
    </Container>
  );
};

export default SearchFlights;
