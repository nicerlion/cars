import React from 'react';
import SearchInput from './../SearchInput';
import './styles.scss';

const Header = () => {
  return <div>
    <div className="container">
      <h1>Cars Online</h1>
    </div>
    <SearchInput />
  </div>
}

export default Header;