import { createSelector } from 'reselect';

export const flightsDataSelector = (state) => state.flights.flights;

export const formattedFlightsSelector = createSelector(
  [flightsDataSelector],
  (data) =>
    data.map(
      ({ departureDateExpected, arrivalCity, departureDate, ...rest }) => ({
        dateExpected: departureDateExpected,
        city: arrivalCity,
        date: departureDate,
        dateLabel: 'Departed at',
        ...rest,
      })
    )
);

// add filter of city - Kyiv

export const departuredFlightsSelector = createSelector(
  [formattedFlightsSelector],
  (flightsData) => flightsData.filter(({ type }) => type === 'DEPARTURE')
);

export const arrivedFlightsSelector = createSelector(
  [formattedFlightsSelector],
  (flightsData) => flightsData.filter(({ type }) => type === 'ARRIVAL')
);
