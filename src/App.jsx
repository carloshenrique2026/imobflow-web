// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Layout from './components/Layout'; // Importe o seu novo Layout
import './App.css'; // Seu CSS global

function App() {
  return (
    <Router>
      <Layout> {/* Envolve suas rotas com o Layout */}
        <AppRoutes />
      </Layout>
    </Router>
  );
}
export default App;