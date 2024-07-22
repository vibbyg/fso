import axios from 'axios';

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const api_key = import.meta.env.VITE_OPENWEATHER_API;

const get = (lat, lon) => {
    return axios
    .get(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${api_key}`)
    .then(res => res.data);
}

export default ({ get });