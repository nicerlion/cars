import carsReducer from './cars.reducer';
import { createStore, combineReducers } from 'redux';

const store = createStore(
  combineReducers({
    cars: carsReducer,
  })
);

export default store;
