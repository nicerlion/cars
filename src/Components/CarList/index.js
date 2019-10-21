import React from 'react';
import CartItem from './../CarItem';
import { connect } from 'react-redux';
import dataSet from './../../data.json';
import { findCarsByBrand, orderCarsByBrand } from './../../Utils';
import './styles.scss';

/**
 * Component to render the list of available cars
 */
const CarList = ({ searchParam }) => {
  const data = !!searchParam ?
    findCarsByBrand(dataSet.cars, searchParam) : dataSet.cars;

  return <div className="container">
    <div className="row">
      <div className="data-list">
        {
          orderCarsByBrand(data).map((carDetail, index) => (
            <CartItem { ...carDetail } key={`car_detail__${index}`} />
          ))
        }
      </div>
    </div>
  </div>
}

const mapStateToProps = ({ cars }) => ({
  searchParam: cars.searchParam
});

export default connect(mapStateToProps)(CarList);