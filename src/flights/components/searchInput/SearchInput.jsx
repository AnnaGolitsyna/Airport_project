import { useState } from 'react';
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
  const [text, setText] = useState();
  const [searchParams, setSearchParams] = useSearchParams({});

  const handleSubmit = (e) => {
    e.preventDefault();
    //const { value } = e.target.searchInput;

    setSearchParams((prevParams) => {
      return new URLSearchParams({
        ...Object.fromEntries(prevParams.entries()),
        search: text.toUpperCase(),
      });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
          <InputLabel htmlFor="input-with-icon-adornment" sx={{ pl: 5 }}>
            Enter a flight number or city
          </InputLabel>
          <Input
            name="searchInput"
            value={text}
            onChange={setText}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          name="SEARCH"
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
