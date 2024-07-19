import CountryDisplay from "./CountryDisplay";
import CountryInfo from "./CountryInfo";

const Display = ({ countries }) => {
    console.log(countries.length);

    return (
        <div>
            {countries.length > 10 
            ? "Too many matches, specify another filter" 
            : countries.length === 1 
            ? <CountryInfo country={countries[0]} />
            : <CountryDisplay countries={countries} />
            }
        </div>
    )

}

export default Display;