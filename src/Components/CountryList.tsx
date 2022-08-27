import React, { useState } from 'react';
import CountryCard,  { Country } from "./CountryCard";
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import './CountryList.scss';

function CountryList({ countries } : { countries: Country[] }) {
  const [filter, setFilter] = useState('');

  const filterCountries = (event : React.ChangeEvent<HTMLInputElement>) : void => {
    setFilter(event.target.value.toLowerCase());
  }

  return (
    <div className="countryList">
    <div className="countryList-search">
      <SearchIcon 
        className="countryList-searchIcon"
      />
      <input
        placeholder="Search for a country..."
        onInput = {filterCountries}
      ></input>
    </div>
    {
      countries.map(country => {
        if (country.name.common.toLowerCase().includes(filter)) {
          return(
            <CountryCard
              key={country.name.common}
              country={country}
            />
          )
        }
        return null;
      })
    }
    </div>
  );
}

export default CountryList;
