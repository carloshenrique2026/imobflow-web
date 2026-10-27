// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'; // <-- Importe o ThemeProvider
import AppRoutes from './routes';
import Layout from './components/Layout';
import theme from './styles/Theme'; // <-- Importe o seu tema
import GlobalStyles from './styles/GlobalStyles'; // <-- Importe os estilos globais
// import './App.css'; // Você pode remover ou comentar este import se for usar apenas styled-components para tudo

function App() {
  return (
    <ThemeProvider theme={theme}> {/* <-- Envolve toda a app com o tema */}
      <GlobalStyles /> {/* <-- Aplica os estilos globais */}
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;