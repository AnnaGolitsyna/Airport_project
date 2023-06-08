import React, { useState } from 'react';
import { Box, Typography, Popover, Alert } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';

const DatePickerFlights = ({ date, onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSetDate = (newDate) => {
    onChange(null, newDate);
    handleClose();
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
        <Typography>{date.format('DD/MM')}</Typography>
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
        <Box sx={{ p: 2 }}>
          <Alert severity="info">The flights were only up to 24.02.22</Alert>
        </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar value={date} onChange={handleSetDate} />
        </LocalizationProvider>
      </Popover>
    </Box>
  );
};

export default DatePickerFlights;
