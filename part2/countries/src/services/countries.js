import axios from 'axios';

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";


const getAll = () => {
    return axios
    .get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(res => {
        return res.data
    });
}

export default { getAll }