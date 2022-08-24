import React from "react";
import "./CountryCard.css";

export interface Country {
  name: {
    common: string
  },
  population: number,
  region: string,
  capital: string,
  flags: {
    png: string
  }
}

function formatNumber(number : number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function CountryCard(props: {country: Country}) {
  return (
    <div className="countryCard">
      <img
        className="countryCard-flag"
        src={props.country.flags.png}
        alt={props.country.name.common}
      ></img>
      <div className="countryCard-info">
        <div className="countryCard-title">
          {props.country.name.common}
        </div>
        <div>
          <span className="countryCard-label">Population: </span>
          {formatNumber(props.country.population)}
        </div>
        <div>
          <span className="countryCard-label">Region: </span>
          {props.country.region}
        </div>
        <div>
          <span className="countryCard-label">Capital: </span>
          {props.country.capital}
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
