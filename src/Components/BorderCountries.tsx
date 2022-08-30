import React from "react";
import { Link } from "react-router-dom";
import { Country } from "../types";
import "./BorderCountries.scss";

export default function BorderCountries({countries, country } : {countries : Country[], country : Country }) {
  function getNameByCode(countryCode : string) {
    return countries.find(el => el.cca3 === countryCode)?.name.common;
  }

  if (country?.borders) {
    return (
      <div className="borders">
        <span className="borders-label">Border countries: </span>
        {
          country.borders.map(border => (
            <Link
              className="borders-border"
              key={ border }
              to={`/country/${border}`}
            >
              { getNameByCode(border) }
            </Link>
          ))
        }
      </div>
    )
  }
  return null;
}
