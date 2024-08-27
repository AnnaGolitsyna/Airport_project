import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const SearchInput = ({ value, onChange, onClear }) => {
  return (
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
        value={value}
        onChange={onChange}
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          value && (
            <InputAdornment position="end">
              <IconButton
                aria-label="clear search"
                onClick={onClear}
                edge="end"
                size="small"
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
