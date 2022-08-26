import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {ReactComponent as DarkModeIcon} from './icons/dark.svg';
import './App.scss';

import CountryList from './Components/CountryList';
import CountryDetails from './Components/CountryDetails';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () : void => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <Router>
      <div className={`App ${theme}`}>
        <div className="theme-selector" onClick={toggleTheme}>
          <DarkModeIcon
            className='theme-icon'
          />
          <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </div>
        <Routes>
          <Route
            path="/country"
            element={<CountryDetails />}
          />
          <Route
            path="/"
            element={<CountryList/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
