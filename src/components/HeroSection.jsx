// src/components/HeroSection.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeroBg from '../assets/hero-banner-bg.jpg'; // <-- NOVA IMAGEM DE FUNDO GENÉRICA!

const HeroContainer = styled.section`
  background-image: url(${HeroBg}); /* <-- Usa a nova imagem */
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Overlay escuro */
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5em;
  margin-bottom: 20px;
  color: white;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 30px;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const HeroButton = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

function HeroSection() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Seu Imóvel Ideal Está Aqui</HeroTitle> {/* <-- Novo título mais conciso */}
        <HeroSubtitle>
          Com a expertise do Corretor Carlos Henrique, encontre as melhores opções em João Pessoa e região!
        </HeroSubtitle>
        <HeroButton to="/imoveis">Ver Imóveis</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;