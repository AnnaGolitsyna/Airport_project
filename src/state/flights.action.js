import { fetchFlights } from './flights.gateway';
import { testUrl } from '../utils/url';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS/FLIGHTS_LIST_RECIEVED';

export const flightsRecieved = (dataFlights) => ({
  type: FLIGHTS_LIST_RECIEVED,
  payload: dataFlights,
});

export const getFlights = () => async (dispatch) => {
  return await fetchFlights(testUrl).then((data) =>
    dispatch(flightsRecieved(data))
  );
};
