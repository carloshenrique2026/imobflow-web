// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa o componente App
// import './index.css'; // Se você tiver um arquivo CSS global para a aplicação, importe-o aqui

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente App */}
  </React.StrictMode>,
);