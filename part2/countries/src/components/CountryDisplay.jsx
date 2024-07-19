import Country from "./Country";
import CountryInfo from "./CountryInfo";
import { useState } from "react";

const CountryDisplay = ({ countries }) => {
    const [country, setCountry] = useState(null);

    const handleCountryClick = (country) => {
        console.log(country);
        setCountry(country);
    }

    if(country) {
        return <CountryInfo country={country} />
    }

    return(
        <div>
            {countries.map((country, index) => {
                return <Country key={index} country={country} onCountryClick={() => handleCountryClick(country)} />
            })}
        </div>
    )
}

export default CountryDisplay;