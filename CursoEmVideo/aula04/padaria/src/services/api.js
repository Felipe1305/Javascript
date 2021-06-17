import axios from 'axios';

const api = axios.create({baseURL:"https://padaria-felipe.herokuapp.com"});

export default api;