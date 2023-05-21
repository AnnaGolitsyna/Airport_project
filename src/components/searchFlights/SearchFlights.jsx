import { Typography, Stack } from '@mui/material';
import SearchInput from '../searchInput/SearchInput';
import SearchBar from '../searchBar/SearchBar';

const SearchFlights = () => {
  return (
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
    </Stack>
  );
};

export default SearchFlights;
