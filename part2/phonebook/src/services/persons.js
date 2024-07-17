import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return axios
    .get(baseUrl)
    .then(res => res.data);
}

const create = (data) => {
    return axios
    .post(baseUrl, data)
    .then(res => res.data);
}

const deletePerson = (id) => {
    return axios
    .delete(`${baseUrl}/${id}`)
    .then(res => res.data);
}

const update = (id, data) => {
    return axios
    .put(`${baseUrl}/${id}`, data)
    .then(res => res.data);
}

export default {getAll, create, update, deletePerson};