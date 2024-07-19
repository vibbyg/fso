import { useState, useEffect } from 'react';
import countriesService from './services/countries';
import CountryFilter from './components/CountryFilter';
import Display from './components/Display';
import './index.css';

function App() {
  const [countries, setCountries] = useState(null);
  const [query, setQuery] = useState('');

  const handleCountryFilter = (event) => {
    setQuery(event.target.value);
  }
  
  useEffect(() => {
    console.log('fetching countries');
      countriesService.getAll()
      .then(res => {
        setCountries(res);
      })
      console.log('done fetching');
  }, [])


  const filteredCountries = countries?.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()));


  if(!countries) {
    return null
  }

  return (
    <div className={'countries'}>
      <h1>Countries</h1>
      <CountryFilter query={query} handleCountryFilter={handleCountryFilter}/>
      {query !== '' ? <Display countries={filteredCountries}/> : null}
    </div>
  )
}

export default App
