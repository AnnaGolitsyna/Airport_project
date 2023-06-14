import { Fragment, useEffect } from 'react';
import { useSearchFlights } from '../hook/filteredFlights';
import FlightTable from '../components/flightTable/FlightTable';
import NotFlights from '../components/notFlights/NotFlights';
//import { departuredFlights } from '../flights.selectors.js';
import { departuredFlightsSelector } from '../flights.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getFligths } from '../flights.action';

const Departure = () => {
  const flightsData = useSelector((state) => departuredFlightsSelector(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFligths());
  }, []);

  console.log('dis', flightsData);

  const { filterFlights, qpDate } = useSearchFlights(flightsData);
  const isValidFlight = filterFlights.length > 0;

  if (!filterFlights) return;

  return (
    <Fragment>
      {!isValidFlight ? (
        <NotFlights date={qpDate} />
      ) : (
        <FlightTable dataFlights={filterFlights} />
      )}
    </Fragment>
  );
};

export default Departure;
