import CountryInfo from "./CountryInfo";

const Display = ({ countries }) => {
    console.log(countries.length);

    return (
        <div>
            {countries.length > 10 
            ? "Too many matches, specify another filter" 
            : countries.length === 1 
            ? <CountryInfo country={countries[0]} />
            : countries.map((country, index) => {
                return <div key={index}>{country.name.common}</div>
            })}
        </div>
    )

}

export default Display;