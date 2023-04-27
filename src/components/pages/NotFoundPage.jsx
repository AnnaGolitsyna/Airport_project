import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container sx={{textAlign: 'center'}}>
      <Typography variant="h6" mt={10}>
        This page will be available later.
        <Link to="/">Go home.</Link>
      </Typography>
    </Container>
  );
};

export default NotFoundPage;
