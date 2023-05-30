import { Fragment } from 'react';
import { useSearchFlights } from '../hook/filteredFlights';
import FlightTable from '../components/flightTable/FlightTable';
import { dataFlights } from '../gateway/data.js';

const departuredFlights = dataFlights.filter(
  ({ type }) => type === 'DEPARTURE'
);

const Departure = () => {
  const flights = useSearchFlights(departuredFlights);
  return (
    <Fragment>
      <FlightTable dataFlights={flights} />
    </Fragment>
  );
};

export default Departure;
