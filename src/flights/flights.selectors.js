import { dataFlights } from '../gateway/data.js';

const arrivedFlights = dataFlights.filter(({ type }) => type === 'ARRIVAL');


console.log('bigF', arrivedFlights);