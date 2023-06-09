import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Typography, Tabs, Tab } from '@mui/material';
import { today, yesterday, tomorrow } from '../../../utils/date';

const DateSwitch = ({ value, onChange }) => {
  const isValidValue = [yesterday, today, tomorrow].includes(value);
  const selectedValue = isValidValue ? value : false;

  return (
    <Tabs value={selectedValue} onChange={onChange}>
      <Tab
        value={yesterday}
        label={
          <>
            {yesterday.format('DD/MM')}
            <Typography>yesterday</Typography>
          </>
        }
      />
      <Tab
        value={today}
        label={
          <>
            {today.format('DD/MM')}
            <Typography>today</Typography>
          </>
        }
      />
      <Tab
        value={tomorrow}
        label={
          <>
            {tomorrow.format('DD/MM')}
            <Typography>tomorrow</Typography>
          </>
        }
      />
    </Tabs>
  );
};

DateSwitch.propTypes = {
  value: PropTypes.instanceOf(dayjs).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateSwitch;
