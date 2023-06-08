import { Typography } from '@mui/material';

const TextBeforeWar = ({date}) => {
  return (
    <Typography variant="h3" p={5}>
      {`There is no such flight on ${date}`}
    </Typography>
  );
};

export default TextBeforeWar;
