import _ from 'lodash';

const _constants = [
  'SET_SEARCH_PARAM',
  'SELECT_TO_COMPARE',
  'UNSELECT_TO_COMPARE',
];
export const constants = _.zipObject(_constants, _constants);

/**
 * Set the global state for search params
 * 
 * @param {String} param The param to query
 */
export const setSearchParam = (searchParam) => ({
  searchParam,
  type: constants.SET_SEARCH_PARAM,
});

/**
 * Select the cars to compare
 * 
 * @param {Object} car The car selected to compare
 */
export const selectCarToCompare = (car) => ({
  car,
  type: constants.SELECT_TO_COMPARE,
});

/**
 * Unselect the comparied car
 * 
 * @param {Object} car The car to unselected on comparison
 */
export const unselectCarToCompare = (car) => ({
  car,
  type: constants.UNSELECT_TO_COMPARE,
});
