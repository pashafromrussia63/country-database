import React, { Suspense, useState } from 'react';
import { Country, RegionFilterOption } from "../types";
import Loader from "./Loader";
import Searchbar from './Searchbar';
import RegionFilter from './RegionFilter';
import './CountryList.scss';

const CountryCard = React.lazy(() => import("./CountryCard"))

function CountryList({ countries } : { countries: Country[] }) {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState<RegionFilterOption>('All');

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
          setRegion = { setRegion }
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
            return <></>;
          })
        }
      </Suspense>
    </div>
  );
}

export default CountryList;
