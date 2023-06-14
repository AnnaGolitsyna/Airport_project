import { dataFlights } from './gateway/data';
import { createSelector } from 'reselect';

export const flightsDataSelector = (state) => state.flights.flights;

export const departuredFlightsSelector = createSelector(
  [flightsDataSelector],
  (flightsData) =>
    flightsData
      .filter(({ type }) => type === 'DEPARTURE')
      .map(
        ({ departureDateExpected, arrivalCity, departureDate, ...rest }) => ({
          dateExpected: departureDateExpected,
          city: arrivalCity,
          date: departureDate,
          dateLabel: 'Departed at',
          ...rest,
        })
      )
);
console.log('s', flightsDataSelector, departuredFlightsSelector);
// add filter of city - Kyiv

const arrivedFlights = dataFlights
  .filter(({ type }) => type === 'ARRIVAL')
  .map(({ arrivalDateExpected, departureCity, arrivalDate, ...rest }) => ({
    dateExpected: arrivalDateExpected,
    city: departureCity,
    date: arrivalDate,
    dateLabel: 'Arrived at',
    ...rest,
  }));

const departuredFlights = dataFlights
  .filter(({ type }) => type === 'DEPARTURE')
  .map(({ departureDateExpected, arrivalCity, departureDate, ...rest }) => ({
    dateExpected: departureDateExpected,
    city: arrivalCity,
    date: departureDate,
    dateLabel: 'Departed at',
    ...rest,
  }));

export { arrivedFlights, departuredFlights };
