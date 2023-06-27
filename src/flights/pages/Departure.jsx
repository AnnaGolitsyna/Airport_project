import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlightTable from '../components/flightTable/FlightTable';
import NotFlights from '../components/notFlights/NotFlights';
import { departuredFlightsSelector } from '../flights.selectors';
import { getFlights } from '../flights.action';
import { useSearchFlights } from '../hook/filteredFlights';

const Departure = () => {
  const flightsData = useSelector((state) => departuredFlightsSelector(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);

  const { filterFlights, qpDate } = useSearchFlights(flightsData);
  const isValidFlight = filterFlights.length > 0;

  return (
    <>
      {isValidFlight ? (
        <FlightTable dataFlights={filterFlights} />
      ) : (
        <NotFlights date={qpDate} />
      )}
    </>
  );
};

export default Departure;
