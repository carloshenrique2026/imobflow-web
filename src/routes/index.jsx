// src/routes/index.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa os containers/páginas
import PropertiesList from '../containers/PropertiesList';
import AdminPanel from '../containers/AdminPanel'; // Se você já o adicionou
import PropertyDetailsPage from '../containers/PropertyDetailsPage'; // <-- GARANTA QUE ESTA LINHA ESTÁ AQUI!
import HomePage from '../containers/HomePage'; // <-- Adicione esta linha

function AppRoutes() {
  return (
    <Routes>
      {/* Rota principal: exibe a lista de imóveis */}
      <Route path="/" element={<HomePage />} />

      {/* Rota para o painel administrativo (se você a adicionou) */}
      {/* <Route path="/admin" element={<AdminPanel />} /> */}

      {/* Rota para a página de detalhes de um imóvel.
          O ':id' é um parâmetro dinâmico que será o ID do imóvel.
          --- DESCOMENTE ESTA LINHA ---
      */}
      <Route path="/imovel/:id" element={<PropertyDetailsPage />} /> {/* <-- DESCOMENTE AQUI! */}

      {/* Adicione outras rotas aqui, se houver */}
    </Routes>
  );
}

export default AppRoutes;