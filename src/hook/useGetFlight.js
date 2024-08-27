import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFlights } from '../state/flights.action';
import {
  arrivedFlightsSelector,
  departuredFlightsSelector,
} from '../state/flights.selectors';
import { useSearchFlights } from './useSearchFlights';

const useGetFlights = (type) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const flightsSelector =
    type === 'arrival' ? arrivedFlightsSelector : departuredFlightsSelector;
  const flightsData = useSelector((state) => flightsSelector(state));

  useEffect(() => {
    dispatch(getFlights())
      .then(() => setLoading(false))
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [dispatch]);

  const { filterFlights, qpDate } = useSearchFlights(flightsData);

  return {
    loading,
    error,
    filterFlights,
    qpDate,
  };
};

export { useGetFlights };


