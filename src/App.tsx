import React, { useState } from 'react';
import './App.scss';
import {ReactComponent as DarkModeIcon} from './icons/dark.svg';

import CountryList from './Components/CountryList';

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
    <div className={`App ${theme}`}>
      <div className="theme-selector" onClick={toggleTheme}>
        <DarkModeIcon
          className='theme-icon'
        />
        <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
      </div>
      <CountryList/>
    </div>
  );
}

export default App;
