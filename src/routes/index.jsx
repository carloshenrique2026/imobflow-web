// src/routes/index.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa os containers/páginas
import PropertiesList from '../containers/PropertiesList';
import AdminPanel from '../containers/AdminPanel';
import PropertyDetailsPage from '../containers/PropertyDetailsPage';
import HomePage from '../containers/HomePage';
import AboutPage from '../containers/AboutPage';     // <-- ADICIONE ESTA LINHA!
import ContactPage from '../containers/ContactPage'; // <-- ADICIONE ESTA LINHA!

function AppRoutes() {
  return (
    <Routes>
      {/* Rota principal: HomePage */}
      <Route path="/" element={<HomePage />} />

      {/* Rota para a lista completa de imóveis */}
      <Route path="/imoveis" element={<PropertiesList />} />

      {/* Rota para a página de detalhes de um imóvel */}
      <Route path="/imovel/:id" element={<PropertyDetailsPage />} />

      {/* Rota para a página "Sobre" */}
      <Route path="/sobre" element={<AboutPage />} /> {/* <-- ADICIONE ESTA ROTA! */}

      {/* Rota para a página "Contato" */}
      <Route path="/contato" element={<ContactPage />} /> {/* <-- ADICIONE ESTA ROTA! */}

      {/* Rota para o painel administrativo (descomente se for usar) */}
      {/* <Route path="/admin" element={<AdminPanel />} /> */}

      {/* Rota para lidar com páginas não encontradas (opcional) */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default AppRoutes;