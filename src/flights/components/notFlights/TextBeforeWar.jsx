import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const TextBeforeWar = ({ date }) => {
  return (
    <Typography variant="h3" p={5}>
      {`There is no such flight on ${date}`}
    </Typography>
  );
};

TextBeforeWar.propTypes = {
  date: PropTypes.string.isRequired,
};

export default TextBeforeWar;
