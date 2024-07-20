import weatherService from './../services/weather';
import { useState, useEffect } from 'react';

const CountryInfo = ({ country }) => {
    const [weather, setWeather] = useState(null);
    const [latitude, longitude] = country.capitalInfo.latlng;

    const weatherIconUrl = (name) => {
        return `https://openweathermap.org/img/wn/${name}@2x.png`
    }
    useEffect(() => {
        weatherService.get(latitude, longitude)
        .then(weatherInfo => {
            console.log(weatherInfo)
            setWeather(weatherInfo);
        })
    }, []);

    console.log(country.languages)
    return (
        <div>
            <h2>{country.name.official}</h2>
            <b>Capital:</b> {country.capital} <br />
            <b>Area (in square kilometres):</b> {country.area} <br />
            <b>Languages Spoken</b> <br />
                {Object.keys(country.languages).map((language, index) => 
                    {
                        return <li key={index}>{country.languages[language]}</li>
                    }
                    )}
            <img src={country.flags.svg} alt={`flag of ${country.name.common}`} width={'50%'} />
            <h3>Weather in {country.capital}</h3>
            {weather ?
            <div>
                <b>Temperature:</b> {parseFloat((weather.main.temp - 273.15).toFixed(2))}° celsius<br/>
                <img src={weatherIconUrl(weather.weather[0].icon)} /><br/>
                <b>Wind:</b> {weather.wind.speed}m/s
            </div>
            : null}
            
        </div>
    )
}

export default CountryInfo;