import { FLIGHTS_LIST_RECIEVED } from './flights.action';

const initialState = {
  flights: [],
};

const flightsReduser = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECIEVED:
      console.log('act', action.payload);
      return {
        ...state,
        flights: action.payload,
      };

    default:
      return state;
  }
};

export default flightsReduser;
