import React from 'react';
import { Box, Typography, Popover } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { today } from '../../utils/date';


const DatePickerFlights = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  //const [value, setValue] = React.useState(today);
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </Popover>
    </Box>
  );
};

export default DatePickerFlights;
