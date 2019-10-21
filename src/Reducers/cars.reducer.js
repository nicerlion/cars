import _ from 'lodash';
import { constants } from './../Actions/cars';

const initialState = {
  searchParam: '',
  carsToCompare: [],
}

const carReducer = (state=initialState, action) => {
  switch (action.type) {
    case constants.SET_SEARCH_PARAM:
      return {
        ...state,
        searchParam: action.searchParam
      }
    case constants.SELECT_TO_COMPARE:
      const { carsToCompare } = state;
      const inState = !!_.find(carsToCompare, { id: action.car.id });
      return {
        ...state,
        carsToCompare: (!inState) ?
          (carsToCompare.length === 2 ?
            [ _.last(carsToCompare), action.car ] :
            [ ...state.carsToCompare, action.car ]) : carsToCompare
      }
    case constants.UNSELECT_TO_COMPARE:
      const copyCarsToCompare = _.cloneDeep(state.carsToCompare);
      _.remove(copyCarsToCompare, { id: action.car.id });
      return {
        ...state,
        carsToCompare: [ ...copyCarsToCompare ]
      }
    default:
      return state;
  }
}

export default carReducer;
