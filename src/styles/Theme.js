// src/styles/Theme.js
// Este arquivo define o tema da sua aplicação (cores, fontes, etc.)

const theme = {
  colors: {
    primary: '#007bff',       // Azul principal (Botões, links, destaques)
    secondary: '#6c757d',     // Cinza secundário
    accent: '#28a745',        // Verde para sucesso/ações positivas
    background: '#f8f9fa',    // Fundo geral das páginas
    cardBackground: '#ffffff',// Fundo de cartões e blocos
    text: '#343a40',          // Cor de texto principal
    lightText: '#6c757d',     // Cor de texto mais clara
    border: '#dee2e6',        // Cor de bordas
  },
  fonts: {
    main: 'Arial, sans-serif', // Fonte principal (ajuste se usar uma fonte do Google Fonts)
    heading: 'Georgia, serif', // Fonte para títulos (ajuste se usar uma fonte do Google Fonts)
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xLarge: '32px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export default theme;