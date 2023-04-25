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
import SearchResult from './SearchResult';
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

        <SearchResult />
        
        <FloatingActionButtonZoom />

      </Stack>
    </Container>
  );
};

export default SearchFlights;
