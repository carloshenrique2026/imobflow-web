// src/components/AboutMeBrief.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Para o botão "Saiba Mais"

// Componente estilizado para o contêiner principal da seção "Sobre Mim"
const AboutContainer = styled.section`
  padding: 60px 20px; /* Espaçamento interno */
  background-color: #f8f9fa; /* Fundo levemente cinza para destacar */
  text-align: center; /* Centraliza o conteúdo */
  max-width: 1200px; /* Largura máxima */
  margin: 0 auto; /* Centraliza o contêiner na página */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px; /* Espaço entre os elementos */

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

// Título da seção
const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 15px;
  }
`;

// Contêiner para a imagem e o texto
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px; /* Espaço entre a imagem e o texto */
  max-width: 900px; /* Largura máxima para o conteúdo interno */

  @media (max-width: 768px) {
    flex-direction: column; /* Em telas menores, a imagem e o texto ficam em coluna */
    gap: 20px;
  }
`;

// Imagem do corretor
const CorretorImage = styled.img`
  width: 200px; /* Largura fixa da imagem */
  height: 200px; /* Altura fixa da imagem */
  border-radius: 50%; /* Torna a imagem circular */
  object-fit: cover; /* Garante que a imagem preencha o círculo sem distorcer */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

// Texto de introdução
const AboutText = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
  text-align: left; /* Alinha o texto à esquerda */

  @media (max-width: 768px) {
    text-align: center; /* Centraliza o texto em telas menores */
  }
`;

// Botão "Saiba Mais"
const LearnMoreButton = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 20px; /* Espaço acima do botão */

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

/**
 * Componente para a seção breve "Sobre Mim" na página inicial.
 */
function AboutMeBrief() {
  return (
    <AboutContainer>
      <SectionTitle>Sobre o Corretor</SectionTitle>
      <ContentWrapper>
        {/* Use a URL da imagem do corretor do site de referência ou uma sua */}
        <CorretorImage src="https://carloshenriquecorretor.com.br/wp-content/uploads/2023/12/carlos.jpg" alt="Carlos Henrique Corretor" />
        <AboutText>
          Olá! Sou Carlos Henrique, seu corretor de imóveis em João Pessoa e região, com CRECI 13610. Minha missão é transformar o sonho da casa própria em realidade, oferecendo um atendimento personalizado e as melhores opções do mercado. Com anos de experiência e um profundo conhecimento da região, estou aqui para guiar você em cada etapa, garantindo segurança e transparência em todas as negociações.
        </AboutText>
      </ContentWrapper>
      {/* O botão navegará para a rota /sobre */}
      <LearnMoreButton to="/sobre">Saiba Mais</LearnMoreButton>
    </AboutContainer>
  );
}

export default AboutMeBrief;