import React, { useState } from 'react';
import './App.css';
import CountryTable from './components/CountryTable';
import Header from './components/Header';

function App() {

  const [countries, setCountries] = useState([
    { rowNumber: 1, flag: '/flagIcons/flag_indian_icon.png', country: 'India', description: 'India a vast and diverse country in South Asia.' },
    { rowNumber: 2, flag: '/flagIcons/canada_flag_icon.png', country: 'Canada', description: 'Canada is a country in North America.' },
    { rowNumber: 3, flag: '/flagIcons/flag_sweden_icon.png', country: 'Sweden', description: 'Sweden, a Nordic country on the Scandinavian Peninsula.' },
    { rowNumber: 4, flag: '/flagIcons/flag_france_icon.png', country: 'France', description: 'France, a Western European country' },
    { rowNumber: 5, flag: '/flagIcons/flag_ireland_icon.png', country: 'Ireland', description: 'Ireland, also known as the Republic of Ireland' }
  ]);

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          <Header />
        </div>
        <div className='card-body'>
          <CountryTable countryList={countries} />
        </div>
      </div>
    </div>
  );
}

export default App;
