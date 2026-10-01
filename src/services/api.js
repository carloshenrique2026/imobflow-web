// src/services/api.js
import axios from 'axios';

// Cria uma instância do axios com a URL base do seu backend
const api = axios.create({
  baseURL: 'http://localhost:3001', // A porta onde seu backend está rodando
  timeout: 10000, // Tempo limite para a requisição (opcional, 10 segundos)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;