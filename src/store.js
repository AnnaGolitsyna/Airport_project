import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import flightsReduser from './flights/flights.reducer';

const appReducer = combineReducers({
  flights: flightsReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
