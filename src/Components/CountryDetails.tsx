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

function getNativeName(nativeName : {[langCode : string]: { common: string }}) : string {
  return Object.values(nativeName).map(name => name.common).join(', ');
}

function getCurrencies(currencies : {[currency : string]: { name: string }}) : string {
  return Object.values(currencies).map(currency => currency.name).join(', ');
}

function getLanguages(languages : {[langCode : string]: [name: string ]}) : string {
  return Object.values(languages).join(', ');
}

function CountryDetails(props: {countries : Country[]}) {
  let { countryCode } = useParams();

  let country = props.countries.find(el => el.cca3 === countryCode);
  if (!country) return (
    <div>
      404
    </div>
  )

  function getNameByCode(countryCode : string) {
    return props.countries.find(el => el.cca3 === countryCode)?.name.common;
  }

  const BorderCountries = () => {
    if (country?.borders) {
      return (
      <div className="countryDetails-borders">
          <span className="countryDetails-label countryDetails-label--border">Border countries: </span>
          {
            country.borders.map(border => (
              <Link
                className="countryDetails-border"
                key={border}
                to={`/country/${border}`}
              >
                {getNameByCode(border)}
              </Link>
            ))
          }
        </div>
      )
    }
    return null;
  }

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
          src={country.flags.svg}
          alt={country.name.common}
        ></img>
        <div className="countryDetails-info">
          <div className="countryDetails-title">{country.name.common}</div>
          <div className="countryDetails-main">
            <div className="countryDetails-column">
              <div>
                <span className="countryDetails-label">Native name: </span>
                {getNativeName(country.name.nativeName)}
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
                <span className="countryDetails-label">Sub Region: </span>
                {country.subregion}
              </div>
              <div>
                <span className="countryDetails-label">Capital: </span>
                {country.capital}
              </div>
            </div>
            <div className="countryDetails-column">
              <div>
                <span className="countryDetails-label">Top-level domain: </span>
                {country.tld}
              </div>
              <div>
                <span className="countryDetails-label">Currencies: </span>
                {getCurrencies(country.currencies)}
              </div>
              <div>
                <span className="countryDetails-label">Languages: </span>
                {getLanguages(country.languages)}
              </div>
            </div>
          </div>
          <BorderCountries />
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
