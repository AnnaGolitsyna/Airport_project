import { useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { today } from '../../utils/date';

const useSearchFlights = (dataFlights) => {
  const [searchParams] = useSearchParams({
    date: today.format('DD-MM-YYYY'),
  });
  const qpDate = searchParams.get('date');
  const qpSearch = searchParams.get('search');

  const filterFlights = dataFlights.filter(
    ({ dateExpected, codeShare, city }) => {
      const formattedDate = dayjs(dateExpected).format('DD-MM-YYYY');

      if (qpSearch) {
        return (
          (qpSearch === codeShare && formattedDate === qpDate) ||
          (qpSearch === city.toUpperCase() && formattedDate === qpDate)
        );
      }

      return formattedDate === qpDate;
    }
  );
  return { filterFlights, qpDate };
};

export { useSearchFlights };
