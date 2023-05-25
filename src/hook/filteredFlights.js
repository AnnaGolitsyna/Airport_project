import { useSearchParams } from 'react-router-dom';
import { today } from '../utils/date';

const useSearchFlights = (dataFligths) => {
  const initialSearchParams = {
    date: today.format('DD-MM-YYYY'),
    flight: '',
  };
  const [searchParams, setSearchParams] = useSearchParams(initialSearchParams);
  const queryParamsDate = searchParams.get('date');
  const queryParamsFligth = searchParams.get('flight');
  console.log(searchParams, queryParamsDate, queryParamsFligth);
  const filterDeparturedFlights = dataFligths.filter(
    ({ codeShare }) => codeShare === queryParamsFligth
  );
  const flights = queryParamsFligth ? filterDeparturedFlights : dataFligths;
  return flights;
};

export { useSearchFlights };
