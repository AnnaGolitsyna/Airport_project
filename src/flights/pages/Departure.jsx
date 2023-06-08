import { Fragment } from 'react';
import { useSearchFlights } from '../hook/filteredFlights';
import FlightTable from '../components/flightTable/FlightTable';
import NotFlights from '../components/notFlights/NotFlights';
import { departuredFlights } from '../flights.selectors.js';

const Departure = () => {
  const { filterFlights, qpDate } = useSearchFlights(departuredFlights);
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

export default Departure;
