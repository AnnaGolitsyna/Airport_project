import { Fragment } from 'react';
import { useSearchFlights } from '../hook/filteredFlights';
import FlightTable from '../components/flightTable/FlightTable';
import { departuredFlights } from '../flights.selectors.js';

const Departure = () => {
  const flights = useSearchFlights(departuredFlights);
  return (
    <Fragment>
      <FlightTable dataFlights={flights} />
    </Fragment>
  );
};

export default Departure;
