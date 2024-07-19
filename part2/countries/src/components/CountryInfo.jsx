const CountryInfo = ({ country }) => {
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
        </div>
    )
}

export default CountryInfo;