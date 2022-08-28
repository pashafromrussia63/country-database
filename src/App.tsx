import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';

import { Country } from "./types/types";
import CountryList from './Components/CountryList';
import CountryDetails from './Components/CountryDetails';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [theme, setTheme] = useState('dark');

  const getCountryList = async () => {
    let response = await fetch('https://restcountries.com/v3.1/all');
    let countries : Country[] = await response.json();
    setCountries(countries);
  };

  const toggleTheme = () : void => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header 
          onToggle = { toggleTheme }
          theme = { theme }
        />
        <div className='content'>
          <Routes>
              <Route
                path="/country/:countryCode"
                element={
                  <CountryDetails
                    countries={countries}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <CountryList
                    countries={countries}
                  />
                }
              />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
