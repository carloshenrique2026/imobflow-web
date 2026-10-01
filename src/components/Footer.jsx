// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333; /* Cor escura para o rodapé */
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 0.9em;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
  margin-top: auto; /* Empurra o footer para o final da página */
`;

const FooterText = styled.p`
  margin: 5px 0;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    &:hover {
      color: #007bff;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} Carlos Henrique Corretor. Todos os direitos reservados.</FooterText>
      <FooterText>CRECI: 13610</FooterText>
      <SocialLinks>
        <a href="https://facebook.com/seu-perfil" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com/seu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer; // <-- ESSA LINHA É CRÍTICA!