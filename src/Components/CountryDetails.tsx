import React from "react";
import { useParams } from "react-router-dom";
import { Country } from "./CountryCard";

function formatNumber(number : number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function CountryDetails(props: {countries : Country[]}) {
  let { countryCode } = useParams();

  let country = props.countries.find(el => el.cca3 === countryCode);
  if (!country) return (
    <div>
      404
    </div>
  )

  return (
    <div className="CountryDetails">
      <img
        className="CountryDetails-flag"
        src={country.flags.png}
        alt={country.name.common}
      ></img>
      <div className="CountryDetails-info">
        <div className="CountryDetails-title">
          {country.name.common}
        </div>
        <div>
          <span className="CountryDetails-label">Population: </span>
          {formatNumber(country.population)}
        </div>
        <div>
          <span className="CountryDetails-label">Region: </span>
          {country.region}
        </div>
        <div>
          <span className="CountryDetails-label">Capital: </span>
          {country.capital}
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
