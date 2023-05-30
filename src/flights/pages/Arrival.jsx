import { Fragment } from 'react';
import { useSearchFlights } from '../hook/filteredFlights';
import FlightTable from '../components/flightTable/FlightTable';
import { dataFlights } from '../gateway/data.js';

const arrivedFlights = dataFlights
  .filter(({ type }) => type === 'ARRIVAL')
  .map((el) => ({
    type: el.type,
    id: el.id,
    terminal: el.terminal,
    dateExpected: el.arrivalDateExpected,
    city: el.departureCity,
    date: el.arrivalDate,
    airlineLogo: el.airlineLogo,
    airlineName: el.airlineName,
    codeShare: el.codeShare,
    dateLabel: 'Arrived at',
  }));

console.log('bigF', arrivedFlights);

const Arrival = () => {
  const flights = useSearchFlights(arrivedFlights);
  return (
    <Fragment>
      <FlightTable dataFlights={flights} />
    </Fragment>
  );
};

export default Arrival;
