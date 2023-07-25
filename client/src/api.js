import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Substitua pela URL base da sua API
});

export default api;
