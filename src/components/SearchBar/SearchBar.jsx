import React from 'react';
import searchIcon from '../../assets/searchIcon.svg'
function SearchBar(props) {
  return (
    <div className="bg-grey flex flex-row items-center justify-center">
      <img src={searchIcon} alt="search-icon" />
      <input type="text" placeholder="Quick search ..."  />
    </div>
  );
}

export default SearchBar;