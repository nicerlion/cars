import './App.scss';
import React from 'react';
import store from './Reducers';
import { Provider } from 'react-redux'
import CarList from './Components/CarList';
import CarsToCompare from './Components/CarsToCompare';
import Header from './Components/Common/header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <CarList />
        <CarsToCompare />
      </div>
    </Provider>
  );
}

export default App;
