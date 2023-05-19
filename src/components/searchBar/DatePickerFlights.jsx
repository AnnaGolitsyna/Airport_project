import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import Popover from '@mui/material/Popover';
import moment from 'moment';
//import Calendar from './Calendar'; // Replace 'Calendar' with the appropriate calendar component you have

const DatePickerFlights = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const today = moment();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <Box
        sx={{
          color: 'primary.main',
          margin: '0 10px',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        <Typography>{today.format('DD/MM')}</Typography>
        <EventRepeatIcon
          sx={{
            fontSize: '3em',
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
          }}
        />
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box>HELLO</Box>
        {/* <Calendar /> */}
      </Popover>
    </Box>
  );
};

export default DatePickerFlights;
