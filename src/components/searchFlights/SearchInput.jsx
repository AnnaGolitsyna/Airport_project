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
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
  return (
    <ButtonGroup>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          bgcolor: '#FFF',
          width: [200, 400, 500],
        }}
      >
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 1 }} />
        <TextField
          id="input-with-sx"
          label="Enter a flight number or city"
          variant="standard"
          sx={{ width: [150, 350, 450]}}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          boxShadow: 0,
          borderRadius: 0,
          borderTopRightRadius: 30,
          width: [null, 170, 200],
          fontSize: [10, 15, 20, 30],
        }}
      >
        SEARCH
      </Button>
    </ButtonGroup>
  );
};

export default SearchInput;
