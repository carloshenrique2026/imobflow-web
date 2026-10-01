// src/containers/HomePage.jsx
import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection'; // <-- Importe aqui!

const HomeContainer = styled.div`
  /* Remova o min-height e o flexbox de centralização daqui,
     pois a HeroSection terá sua própria altura e centralização.
     Deixe apenas estilos de padding, background, etc. que sejam globais para a Home. */
  padding: 0; /* A HeroSection vai ocupar toda a largura, então padding 0 */
  background-color: #f0f2f5;
  /* O min-height pode ser removido ou ajustado para o restante do conteúdo */
  min-height: calc(100vh - 120px - 600px); /* Ajuste a altura para o restante */
`;

// Se você quiser manter o título de boas-vindas, pode colocá-lo abaixo da HeroSection
const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5em;
  color: #333;
  margin: 40px 0;
`;

function HomePage() {
  return (
    <HomeContainer>
      <HeroSection /> {/* <-- Renderize a HeroSection aqui! */}

      {/* Você pode adicionar outras seções abaixo da HeroSection */}
      <SectionTitle>Imóveis em Destaque</SectionTitle>
      {/* Aqui viria o componente FeaturedProperties */}

      <SectionTitle>Sobre o Corretor</SectionTitle>
      {/* Aqui viria o componente AboutMeBrief */}

    </HomeContainer>
  );
}

export default HomePage;