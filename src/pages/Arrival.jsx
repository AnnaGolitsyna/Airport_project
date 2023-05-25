import { Fragment } from 'react';
import { useSearchFlights } from '../hook/filteredFlights';
import FlightTable from '../components/flightTable/FlightTable';
import { dataFlights } from '../gateway/data.js';

const arrivedFlights = dataFlights.filter(({ type }) => type === 'ARRIVAL');

const Arrival = () => {
  const flights = useSearchFlights(arrivedFlights);
  return (
    <Fragment>
      <FlightTable dataFlights={flights} />
    </Fragment>
  );
};

export default Arrival;
