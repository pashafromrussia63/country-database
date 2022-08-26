import React from "react";
import CountryCard,  { Country } from "./CountryCard";
import './CountryList.css';

function CountryList(props: {countries: Country[]}) {
  return (
    <div className="countryList">
    {
      props.countries.map(country => {
        return(
          <CountryCard
            key={country.name.common}
            country={country}
          />
        )
      })
    }
    </div>
  );
}

export default CountryList;
