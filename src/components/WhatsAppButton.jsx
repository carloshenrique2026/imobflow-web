// src/components/WhatsAppButton.jsx
import React from 'react';
import styled from 'styled-components';

const WhatsAppLink = styled.a`
  position: fixed; /* Posição fixa na tela */
  bottom: 30px; /* Distância do fundo */
  right: 30px; /* Distância da direita */
  background-color: #25D366; /* Cor verde do WhatsApp */
  color: white;
  border-radius: 50%; /* Faz um círculo */
  width: 60px; /* Largura do botão */
  height: 60px; /* Altura do botão */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em; /* Tamanho do ícone (pode ser um ícone real) */
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: background-color 0.3s ease;
  z-index: 1000; /* Garante que fique acima de outros elementos */

  &:hover {
    background-color: #1DA851;
  }
`;

function WhatsAppButton() {
  // Substitua pelo seu número de telefone e mensagem padrão
  const phoneNumber = '5583999999999'; // Ex: 55 DDD NÚMERO
  const message = 'Olá, gostaria de mais informações sobre um imóvel.';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <WhatsAppLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      {/* Pode usar um ícone real do WhatsApp aqui, ex: <FaWhatsapp /> */}
      WA {/* Texto simples ou ícone */}
    </WhatsAppLink>
  );
}

export default WhatsAppButton; // <-- ESSA LINHA É CRÍTICA!