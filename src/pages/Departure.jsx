import { Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import FlightTable from '../components/flightTable/FlightTable';
import { dataFlights } from '../gateway/data.js';

const departuredFlights = dataFlights.filter(
  ({ type }) => type === 'DEPARTURE'
);

const Departure = () => {
  let [searchParams] = useSearchParams();
  const queryParams = searchParams.get('flight');
  const filterDeparturedFlights = departuredFlights.filter(
    ({ codeShare }) => codeShare === queryParams
  );
  const flights = queryParams ? filterDeparturedFlights : departuredFlights;

  return (
    <Fragment>
      <FlightTable dataFlights={flights} />
    </Fragment>
  );
};

export default Departure;
