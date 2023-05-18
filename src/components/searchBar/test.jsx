import * as React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { Stack, Container } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button>
          <FlightTakeoffIcon />
          Departure
        </Button>
        <Button>
          <FlightLandIcon /> Arrival
        </Button>
      </ButtonGroup>
      <Box sx={{ bgcolor: 'background.paper' }}>
        <Box position="static">
          <EventRepeatIcon
            sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
          />
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            // variant="fullWidth"
            aria-label="basic tabs example"
          >
            <Tab label="yesterday" {...a11yProps(0)} />
            <Tab label="today" {...a11yProps(1)} />
            <Tab label="tomorrow" {...a11yProps(2)} />
            <Tab
              label={
                <Button>
                  <FlightTakeoffIcon />
                  Departure
                </Button>
              }
              {...a11yProps(3)}
            ></Tab>
          </Tabs>
        </Box>
        <Box
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            yesterday
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            today
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            tomorrow
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            ???
          </TabPanel>
        </Box>
      </Box>
    </Container>
  );
}
