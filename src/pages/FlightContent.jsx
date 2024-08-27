import { useParams } from 'react-router-dom';
import FlightTable from '../components/flightTable/FlightTable';
import NotFlights from '../components/notFlights/NotFlights';
import Spinner from '../components/spinner/Spinner';
import ErrorAlert from '../components/errorAlert/ErrorAlert';
import NotFoundPage from './NotFoundPage';
import { useGetFlights } from '../hook/useGetFlight';

const FlightContent = () => {
  const { type } = useParams();
  const { loading, error, filterFlights, qpDate } = useGetFlights(type);

  if (loading) {
    return <Spinner />;
  }

  const content =
    type === 'later' ? (
      <NotFoundPage />
    ) : filterFlights.length > 0 ? (
      <FlightTable dataFlights={filterFlights} />
    ) : (
      <NotFlights date={qpDate} />
    );

  return (
    <>
      {error && <ErrorAlert message={`Failed to fetch flights.`} />}
      {content}
    </>
  );
};

export default FlightContent;
