import { Fragment } from 'react';
import { useSearchFlights } from '../hook/filteredFlights';
import FlightTable from '../components/flightTable/FlightTable';
import { arrivedFlights } from '../flights.selectors.js';

const Arrival = () => {
  const flights = useSearchFlights(arrivedFlights);
  return (
    <Fragment>
      <FlightTable dataFlights={flights} />
    </Fragment>
  );
};

export default Arrival;
