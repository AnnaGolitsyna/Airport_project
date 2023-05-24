import { Typography, Tabs, Tab } from '@mui/material';
import { today, yesterday, tomorrow } from '../../utils/date';

const DateSwitch = ({ value, onChange }) => {
  //console.log(value);

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

export default DateSwitch;
