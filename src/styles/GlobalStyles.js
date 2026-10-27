// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

// createGlobalStyle é uma função do styled-components para injetar CSS global
const GlobalStyles = createGlobalStyle`
  /* Reset Básico de CSS */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main}; /* Usa a fonte definida no tema */
    color: ${({ theme }) => theme.colors.text}; /* Usa a cor de texto definida no tema */
    background-color: ${({ theme }) => theme.colors.background}; /* Fundo geral da app */
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading}; /* Usa a fonte de título do tema */
    color: ${({ theme }) => theme.colors.text};
    margin-top: 0;
    margin-bottom: 0.5em;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  ul {
    list-style: none; /* Remove marcadores de lista padrão */
  }

  img {
    max-width: 100%;
    height: auto;
    display: block; /* Remove espaço extra abaixo de imagens */
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;

export default GlobalStyles;