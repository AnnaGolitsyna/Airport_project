import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const TextAfterWar = ({ date }) => {
  return (
    <>
      <Typography variant="h3" pt={5}>
        No flights
      </Typography>
      <Typography variant="h4" pt={2} sx={{ color: 'primary.main' }}>
        {date}
      </Typography>
      <Typography variant="h5" p={2}>
        Please note that air traffic has been suspended since 24.02.22 due to
        the war
      </Typography>
    </>
  );
};

TextAfterWar.propTypes = {
  date: PropTypes.string.isRequired,
};

export default TextAfterWar;
