import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '@mui/material';
import dayjs from 'dayjs';
import TextAfterWar from './TextAfterWar';
import TextBeforeWar from './TextBeforeWar';

const NotFlights = ({ date }) => {
  const isValidDate = dayjs(date, 'DD-MM-YYYY').isAfter(
    dayjs('24-02-2022', 'DD-MM-YYYY')
  );
  return (
    <Container>
      <Box
        sx={{
          bgcolor: 'background.paper',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {isValidDate ? (
          <TextAfterWar date={date} />
        ) : (
          <TextBeforeWar date={date} />
        )}
      </Box>
    </Container>
  );
};

NotFlights.propTypes = {
  date: PropTypes.string.isRequired,
};

export default NotFlights;
