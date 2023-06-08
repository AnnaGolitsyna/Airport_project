import { useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { today } from '../../utils/date';

const useSearchFlights = (dataFligths) => {
  const [searchParams] = useSearchParams({
    date: today.format('DD-MM-YYYY'),
  });
  const qpDate = searchParams.get('date');
  const qpFligth = searchParams.get('flight');

  const filterFlights = dataFligths.filter(({ dateExpected, codeShare }) => {
    return qpFligth
      ? qpFligth === codeShare &&
          dayjs(dateExpected).format('DD-MM-YYYY') === qpDate
      : dayjs(dateExpected).format('DD-MM-YYYY') === qpDate;
  });

  console.log('res', filterFlights);
  return { filterFlights, qpDate };
};

export { useSearchFlights };
