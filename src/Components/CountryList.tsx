import React, { Suspense, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Country } from "../types";
import Loader from "./Loader";
import Searchbar from './Searchbar';
import RegionFilter from './RegionFilter';
import './CountryList.scss';
import { RootState } from '..';
import { setRegionFilter } from '../redux/countrySlice';

const CountryCard = React.lazy(() => import("./CountryCard"))

function CountryList() {
  const [search, setSearch] = useState('');
  const countries = useSelector((state: RootState) => state.country.countries);
  const region = useSelector((state: RootState) => state.country.regionFilter);
  const dispatch = useDispatch();

  const isCountryDisplayed = (country : Country) => {
    let searchCondition = country.name.common.toLowerCase().includes(search);
    let filterCondition = (country.region === region || region === 'All');
    return searchCondition && filterCondition;
  }

  return (
    <div className="countryList">
      <div className="countryList-filters">
        <Searchbar 
          setSearch={ setSearch }
        />
        <RegionFilter 
          region={ region }
          setRegion = { (region) => dispatch(setRegionFilter(region)) }
        />
      </div>
      <Suspense
        fallback={<Loader/>}
      >
        {
          countries.map(country => {
            if (isCountryDisplayed(country)) {
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
