import React, { Suspense, useState } from 'react';
import { Country } from "./CountryCard";
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import './CountryList.scss';

const CountryCard = React.lazy(() => import("./CountryCard"))

const REGIONS : string[] = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function CountryList({ countries } : { countries: Country[] }) {
  const [filter, setFilter] = useState('');
  const [region, setRegion] = useState('');
  const [filterActive, setFilterActive] = useState(false);

  const filterCountries = (event : React.ChangeEvent<HTMLInputElement>) : void => {
    setFilter(event.target.value.toLowerCase());
  }

  const selectRegion = (region: string) => {
    setFilterActive(false);
    if (region === 'All') {
      setRegion('');
    } else {
      setRegion(region);
    }
  }

  const toggleFilter = () => {
    setFilterActive(!filterActive);
  }

  const RegionFilterOptions = () => {
    if (filterActive) {
      return (
        <div className="countryList-filterOptions">
          {
            REGIONS.map(region => (
              <div
                key={region}
                onClick={() => selectRegion(region)}
              >
                {region}
              </div>
            ))
            }
        </div>
      )
    }
    return null;
  }

  return (
    <div className="countryList">
      <div className="countryList-filters">
        <div className="countryList-search">
          <SearchIcon 
            className="countryList-searchIcon"
          />
          <input
            placeholder="Search for a country..."
            onInput = {filterCountries}
          ></input>
        </div>
        <div className="countryList-filter">
          <div 
            className="countryList-filterBox"
            onClick={toggleFilter}
          >
            { region ? region : 'Filter by Region'}
            <ChevronIcon 
              className="countryList-filterIcon"
            />
          </div>
          <RegionFilterOptions />
        </div>
      </div>
      <Suspense
        fallback={<div>Loading...</div>}
      >
        {
          countries.map(country => {
            if (country.name.common.toLowerCase().includes(filter) && (country.region === region || !region)) {
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
      </Suspense>
    </div>
  );
}

export default CountryList;
