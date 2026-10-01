// src/components/HeroSection.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Para o botão "Ver Imóveis"

// Componente estilizado para o contêiner principal da Hero Section
const HeroContainer = styled.section`
  background-image: url('https://carloshenriquecorretor.com.br/wp-content/uploads/2023/12/banner-site-min.jpg'); /* Use a imagem de fundo do site */
  background-size: cover; /* Garante que a imagem cubra toda a área */
  background-position: center; /* Centraliza a imagem */
  height: 600px; /* Altura fixa para a seção, ajuste conforme necessário */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  color: white; /* Cor do texto */
  text-align: center; /* Alinhamento do texto */
  position: relative; /* Necessário para o overlay */

  /* Overlay escuro para melhorar a legibilidade do texto */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4); /* Escurece a imagem de fundo */
    z-index: 1; /* Garante que o overlay esteja abaixo do texto */
  }
`;

// Componente estilizado para o conteúdo (título e botão)
const HeroContent = styled.div`
  position: relative; /* Garante que o conteúdo fique acima do overlay */
  z-index: 2; /* Acima do overlay */
  max-width: 800px; /* Largura máxima para o texto */
  padding: 20px;
`;

// Componente estilizado para o título
const HeroTitle = styled.h1`
  font-size: 3.5em; /* Tamanho do título grande */
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra para o texto */

  @media (max-width: 768px) {
    font-size: 2.5em; /* Ajuste para telas menores */
  }
`;

// Componente estilizado para o subtítulo/descrição (opcional)
const HeroSubtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

// Componente estilizado para o botão
const HeroButton = styled(Link)`
  background-color: #007bff; /* Cor azul de destaque */
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none; /* Remove sublinhado */
  font-size: 1.2em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Transição suave */

  &:hover {
    background-color: #0056b3; /* Cor mais escura ao passar o mouse */
    transform: translateY(-2px); /* Efeito de "levantar" */
  }
`;

function HeroSection() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Carlos Henrique Corretor</HeroTitle>
        <HeroSubtitle>
          Encontre o imóvel ideal para você em João Pessoa e região!
        </HeroSubtitle>
        <HeroButton to="/imoveis">Ver Imóveis</HeroButton> {/* Link para a lista de imóveis */}
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;