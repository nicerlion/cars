import React from 'react';
import { connect } from 'react-redux';
import { setSearchParam } from './../../Actions/cars';
import './styles.scss';

const SearchInput = ({ setSearchParam, searchParam }) => {
  return <div className="search-container">
    <div className="container">
      <input
        type="text"
        value={searchParam || ''}
        placeholder="Search for autos e.g. chevrolet"
        onChange={(e) => {
          setSearchParam(e.target.value);
          e.preventDefault();
        }}
      />
    </div>
  </div>
}

const mapStateToProps = ({ cars }) => ({
  searchParam: cars.searchParam,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchParam: (query) => {
    return dispatch(setSearchParam(query));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
