import { useSearchParams } from 'react-router-dom';
import { today } from '../utils/date';

const useSearchFlights = (dataFligths) => {

  const [searchParams, setSearchParams] = useSearchParams({
    date: today.format('DD-MM-YYYY'),
  });
  const queryParamsDate = searchParams.get('date');
  const queryParamsFligth = searchParams.get('flight');
  console.log('hook', searchParams, queryParamsDate, queryParamsFligth);
  const filterDeparturedFlights = dataFligths.filter(
    ({ codeShare }) => codeShare === queryParamsFligth
  );
  const flights = queryParamsFligth ? filterDeparturedFlights : dataFligths;
  console.log(flights);
  return flights;
};

export { useSearchFlights };
