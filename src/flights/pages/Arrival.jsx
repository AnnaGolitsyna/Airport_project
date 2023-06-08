import { Fragment } from 'react';
import { useSearchFlights } from '../hook/filteredFlights';
import FlightTable from '../components/flightTable/FlightTable';
import { arrivedFlights } from '../flights.selectors.js';
import NotFlights from '../components/notFlights/NotFlights';

const Arrival = () => {
  const { filterFlights, qpDate } = useSearchFlights(arrivedFlights);
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
