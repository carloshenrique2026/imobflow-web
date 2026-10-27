// src/containers/HomePage.jsx
import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import FeaturedProperties from '../components/FeaturedProperties';
import AboutMeBrief from '../components/AboutMeBrief';
import Testimonials from '../components/Testimonials';
import ContactBrief from '../components/ContactBrief'; // <-- GARANTA QUE ESTA LINHA ESTÁ AQUI E ATIVA!

const HomeContainer = styled.div`
  padding: 0;
  background-color: #f0f2f5;
  min-height: calc(100vh - 120px);
`;

// SectionTitle pode ser mantido se você precisar de títulos genéricos para outras seções
// const SectionTitle = styled.h2`
//   text-align: center;
//   font-size: 2.5em;
//   color: #333;
//   margin: 40px 0 30px;
//   padding: 0 20px;
// `;

function HomePage() {
  return (
    <HomeContainer>
      <HeroSection />
      <FeaturedProperties />
      <AboutMeBrief />
      <Testimonials />

      {/* Renderiza a seção de Contato Breve aqui */}
      <ContactBrief /> {/* <-- GARANTA QUE ESTA LINHA ESTÁ AQUI E ATIVA! */}

    </HomeContainer>
  );
}

export default HomePage;