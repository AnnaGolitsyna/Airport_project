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
  const [searchParams, setSearchParams] = useSearchParams();

  // for (const [key, value] of searchParams.entries()) {
  //   console.log('flied', key, value);
  // }
  // console.log('sp', searchParams.entries());
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.searchInput.value;
    console.log(query);
    // updateSearchParam('flight', query.toUpperCase());
    // setSearchParams((prevParams) => {
    //   console.log('test', prevParams, {
    //     ...prevParams,
    //     flight: query.toUpperCase(),
    //   });
    //   return {
    //     ...prevParams,
    //     flight: query.toUpperCase(),
    //   };
    // });

    //console.log(searchParams.set('flight', 'b'));
    setSearchParams((prevParams) => ({
      ...prevParams,
      flight: query.toUpperCase(),
    }));
    // setSearchParams(searchParams.append('flight', query.toUpperCase()));
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
          <InputLabel sx={{ pl: 5 }}>Enter a flight number</InputLabel>
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
