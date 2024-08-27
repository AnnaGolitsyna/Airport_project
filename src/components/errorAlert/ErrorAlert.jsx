import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Box, Alert } from '@mui/material';

const ErrorAlert = ({ message }) => {
  const container = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return createPortal(
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Alert variant="filled" severity="error">
        {message}
      </Alert>
    </Box>,
    container
  );
};

ErrorAlert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorAlert;
