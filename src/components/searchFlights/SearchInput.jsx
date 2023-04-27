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
  return (
    <ButtonGroup>
      <FormControl
        variant="standard"
        sx={{
          pl: 1,
          bgcolor: '#FFF',
          borderTopLeftRadius: 30,
          width: [250, 400, 500],
        }}
      >
        <InputLabel sx={{ pl: 5 }}>Enter a flight number or city</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
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
  );
};

export default SearchInput;
