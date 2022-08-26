import React from "react";
import {
  Link,
  useParams
} from "react-router-dom";
import { ReactComponent as ReturnIcon } from '../icons/arrow.svg';
import { Country } from "./CountryCard";
import "./CountryDetails.scss";

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
    <div className="countryDetails">
      <Link
        className="countryDetails-back"
        to="/"
      >
        <ReturnIcon className="countryDetails-backIcon"/>
        Back
      </Link>
      <div className="countryDetails-content">
        <img
          className="countryDetails-flag"
          src={country.flags.png}
          alt={country.name.common}
        ></img>
        <div className="countryDetails-info">
          <div className="countryDetails-title">
            {country.name.common}
          </div>
          <div>
            <span className="countryDetails-label">Population: </span>
            {formatNumber(country.population)}
          </div>
          <div>
            <span className="countryDetails-label">Region: </span>
            {country.region}
          </div>
          <div>
            <span className="countryDetails-label">Capital: </span>
            {country.capital}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
