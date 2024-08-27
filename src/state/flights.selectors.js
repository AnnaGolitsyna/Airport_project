import { createSelector } from 'reselect';

export const flightsDataSelector = (state) => state.flights.flights;

export const departuredFlightsSelector = createSelector(
  [flightsDataSelector],
  (flightsData) =>
    flightsData
      .filter(({ type }) => type === 'DEPARTURE')
      .map(
        ({ departureDateExpected, departureCity, departureDate, ...rest }) => ({
          dateExpected: departureDateExpected,
          city: departureCity,
          date: departureDate,
          dateLabel: 'Departed at',
          ...rest,
        })
      )
);

export const arrivedFlightsSelector = createSelector(
  [flightsDataSelector],
  (flightsData) =>
    flightsData
      .filter(({ type }) => type === 'ARRIVAL')
      .map(
        ({
          arrivalDateExpected,
          arrivalCity,
          arrivalDate,
          ...rest
        }) => ({
          dateExpected: arrivalDateExpected,
          city: arrivalCity,
          date: arrivalDate,
          dateLabel: 'Arrived at',
          ...rest,
        })
      )
);
