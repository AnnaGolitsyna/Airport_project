import {
  Box,
  Container,
  Typography,
  TextField,
  Stack,
  Button,
  ButtonGroup,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <Container>
      <Stack
        spacing={5}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h2" mt={10} >
          FLIGHT SEARCH
        </Typography>

        <ButtonGroup>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              bgcolor: '#FFF',
              width: [300, 400, 500],
            }}
          >
            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 1 }} />
            <TextField
              id="input-with-sx"
              label="Flight number or city"
              variant="standard"
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              boxShadow: 0,
              borderRadius: 0,
              borderTopRightRadius: 40,
              width: [null, 170, 200],
            }}
          >
            FIND
          </Button>
        </ButtonGroup>
      </Stack>
    </Container>
  );
};

export default Search;
