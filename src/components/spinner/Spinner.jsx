import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

const Spinner = () => {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: 'background.paper',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '20px',
        }}
      >
        <CircularProgress size={80} />
      </Box>
    </Container>
  );
};

export default Spinner;
