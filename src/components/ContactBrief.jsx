// src/components/ContactBrief.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Para o botão "Entre em Contato"

// Componente estilizado para o contêiner principal da seção de contato breve
const ContactBriefContainer = styled.section`
  padding: 60px 20px;
  background-color: #f0f2f5; /* Fundo suave para contraste */
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

// Título da seção
const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 10px;
  }
`;

// Parágrafo de texto introdutório
const ContactText = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
  max-width: 700px;
  margin-bottom: 10px;
`;

// Informação de contato (ex: telefone)
const ContactInfo = styled.p`
  font-size: 1.4em;
  font-weight: bold;
  color: #007bff; /* Cor de destaque */
  margin-bottom: 20px;

  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

// Botão "Entre em Contato"
const ContactButton = styled(Link)`
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

  @media (max-width: 480px) {
    padding: 12px 25px;
    font-size: 1em;
  }
`;

/**
 * Componente para a seção breve de contato na página inicial.
 */
function ContactBrief() {
  // Substitua pelo seu número de telefone real
  const phoneNumber = '5583999999999'; // Ex: 55 DDD NÚMERO
  const formattedPhoneNumber = '(83) 99999-9999'; // Como você quer que apareça

  return (
    <ContactBriefContainer>
      <SectionTitle>Vamos Conversar?</SectionTitle>
      <ContactText>
        Tem alguma dúvida, precisa de uma consultoria ou quer agendar uma visita?
        Entre em contato hoje mesmo!
      </ContactText>
      <ContactInfo>
        Telefone: <a href={`tel:${phoneNumber}`}>{formattedPhoneNumber}</a>
      </ContactInfo>
      {/* O botão navegará para a rota /contato */}
      <ContactButton to="/contato">Entre em Contato</ContactButton>
    </ContactBriefContainer>
  );
}

export default ContactBrief;