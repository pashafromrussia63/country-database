import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Components/Header';
import CountryList from './Components/CountryList';
import CountryDetails from './Components/CountryDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import { Country } from "./types";
import { RootState } from '.';
import { setCountries } from './redux/countrySlice';

function App() {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const getCountryList = async () => {
    console.log('fetching data');
    let response = await fetch('https://restcountries.com/v3.1/all');
    let countries : Country[] = await response.json();
    dispatch(setCountries(countries));
  };

  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header/>
        <div className='content'>
          <Routes>
              <Route
                path="/country/:countryCode"
                element={
                  <CountryDetails />
                }
              />
              <Route
                path="/"
                element={
                  <CountryList /> 
                }
              />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
