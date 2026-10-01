// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa o roteador
import AppRoutes from './routes'; // Importa suas definições de rota
import './App.css'; // Seu CSS global pode ficar aqui ou em index.css

// Se você tiver um componente de Header ou Footer global, você pode importá-los aqui
// import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Você pode adicionar um Header aqui se ele for comum a todas as páginas */}
      {/* <Header /> */}

      {/* A tag <main> é semântica e indica o conteúdo principal da página */}
      <main>
        <AppRoutes /> {/* Este componente renderizará a rota correspondente à URL */}
      </main>

      {/* Você pode adicionar um Footer aqui se ele for comum a todas as páginas */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;