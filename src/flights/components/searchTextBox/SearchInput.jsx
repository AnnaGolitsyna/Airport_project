import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({value, onChange}) => {
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
      />
    </FormControl>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
