import _ from 'lodash';

/**
 * Function to get the cars filtered by brand
 * 
 * @param {Array} cars List of cars to find
 * @param {String} query Query param to filter car set
 */
export const findCarsByBrand = (cars, query) => {
  return _.filter(cars, (value) => _.startsWith(value.brand.toLowerCase(), query.trim()));
}

/**
 * Function to order cars by brand
 * 
 * @param {Array} cars List of cars to order
 * @param {Boolean} asc Order ascendent
 */
export const orderCarsByBrand = (cars, asc=true) => {
  return _.orderBy(cars, ['brand'], [!!asc ? 'asc' : 'desc']);
}
