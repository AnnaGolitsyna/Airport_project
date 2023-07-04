import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import SearchInput from './SearchInput';

const SearchTextBox = () => {
  const [text, setText] = useState('');
  const [_, setSearchParams] = useSearchParams({});

  const handleChange = ({ target: { value } }) => {
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        <SearchInput value={text} onChange={handleChange} />

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

export default SearchTextBox;
