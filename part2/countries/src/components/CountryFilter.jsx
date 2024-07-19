
const CountryFilter = ({ query, handleCountryFilter }) => {
    return (
        <div>
            find countries: <input value={query} onChange={handleCountryFilter} />
        </div>
    )
}

export default CountryFilter;