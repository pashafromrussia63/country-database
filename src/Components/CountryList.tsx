import React, { useEffect, useState } from "react";
import CountryCard,  { Country } from "./CountryCard";
import './CountryList.css';

function CountryList() {
  const [countries, setCountries] = useState<Country[]>([]);

  const getCountryList = async () => {
    let response = await fetch('https://restcountries.com/v3.1/all');
    let countries : Country[] = await response.json();
    setCountries(countries);
  };

  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <div className="countryList">
    {
      countries.map(country => {
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
