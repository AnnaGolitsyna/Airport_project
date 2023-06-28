import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlightTable from '../components/flightTable/FlightTable';
import NotFlights from '../components/notFlights/NotFlights';
import Spinner from '../components/spinner/Spinner';
import ErrorAlert from '../components/errorAlert/ErrorAlert';
import { departuredFlightsSelector } from '../flights.selectors';
import { getFlights } from '../flights.action';
import { useSearchFlights } from '../hook/filteredFlights';

const Departure = () => {
  const flightsData = useSelector((state) => departuredFlightsSelector(state));
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    dispatch(getFlights())
      .then(() => setLoading(false))
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [dispatch]);

  const { filterFlights, qpDate } = useSearchFlights(flightsData);
  const isValidFlight = filterFlights.length > 0;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {error && <ErrorAlert message={`Failed to fetch flights.`} />}
      {isValidFlight ? (
        <FlightTable dataFlights={filterFlights} />
      ) : (
        <NotFlights date={qpDate} />
      )}
    </>
  );
};

export default Departure;
