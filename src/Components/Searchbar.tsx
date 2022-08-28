import React from 'react';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import './Searchbar.scss';

export default function Searchbar({ setSearch } : { setSearch: (search : string) => void }) {
  const filterCountries = (event : React.ChangeEvent<HTMLInputElement>) : void => {
    setSearch(event.target.value.toLowerCase());
  }
  
  return (
    <div className="searchbar">
      <SearchIcon 
        className="searchbar-icon"
      />
      <input
        placeholder="Search for a country...."
        onInput = { filterCountries }
      ></input>
    </div>
  );
}
