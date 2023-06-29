import { useSearchParams } from 'react-router-dom';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  ButtonGroup,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
  const [_, setSearchParams] = useSearchParams({});

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.searchInput.value;
    setSearchParams((prevParams) => {
      return new URLSearchParams({
        ...Object.fromEntries(prevParams.entries()),
        search: query.toUpperCase(),
      });
    });
  };

  return (
    <form onSubmit={handleSearch}>
      <ButtonGroup>
        <FormControl
          variant="standard"
          sx={{
            pl: 1,
            bgcolor: 'primary.light',
            borderTopLeftRadius: 30,
            width: [250, 400, 500],
          }}
        >
          <InputLabel sx={{ pl: 5 }}>Enter a flight number or city</InputLabel>
          <Input
            name="searchInput"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          sx={{
            boxShadow: 0,
            borderRadius: 0,
            borderTopRightRadius: 30,
            width: [null, 170, 200],
            fontSize: [10, 15, 20],
          }}
        >
          SEARCH
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default SearchInput;
