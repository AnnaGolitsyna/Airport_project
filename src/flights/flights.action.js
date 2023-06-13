import { fetchFlights } from './flights.gateway';
import { testUrl } from '../utils/url';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS/FLIGHTS_LIST_RECIEVED';

export const flightsRecieved = (dataFlights) => ({
  type: FLIGHTS_LIST_RECIEVED,
  payload: { dataFlights },
});

export const getFligths = () => (dispatch) => {
  return fetchFlights(testUrl).then((data) => dispatch(flightsRecieved(data)));
};
