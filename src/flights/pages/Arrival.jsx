import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchFlights } from '../hook/filteredFlights';
import FlightTable from '../components/flightTable/FlightTable';
import NotFlights from '../components/notFlights/NotFlights';
import { arrivedFlightsSelector } from '../flights.selectors';
import { getFligths } from '../flights.action';

const Arrival = () => {
  const flightsData = useSelector((state) => arrivedFlightsSelector(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFligths());
  }, []);

  const { filterFlights, qpDate } = useSearchFlights(flightsData);
  const isValidFlight = filterFlights.length > 0;
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

export default Arrival;
