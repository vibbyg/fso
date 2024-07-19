import './../index.css';

const Country = ({ country, onCountryClick }) => {
    return (
        <div className={'country'}>
            {country.name.common} <button onClick={onCountryClick}>show</button>
        </div>
    )
}

export default Country;