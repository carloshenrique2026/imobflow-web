// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.text}; /* Cor de texto principal (um cinza escuro) */
  color: white;
  padding: ${({ theme }) => theme.spacing.xLarge} ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 0.9em;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1); /* Sombra para o topo do footer */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.large};
  }
`;

const FooterNav = styled.nav`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-wrap: wrap; /* Permite que os links quebrem linha */
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
  }
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary}; /* Mudar para a cor primária no hover */
  }
`;

const SocialMedia = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5em;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.p`
  margin-top: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.lightText}; /* Texto de copyright mais claro */
`;

function Footer() {
  // Data atual para o ano do copyright
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterNav>
        <FooterLink to="/">Início</FooterLink>
        <FooterLink to="/imoveis">Imóveis</FooterLink>
        <FooterLink to="/sobre">Sobre</FooterLink>
        <FooterLink to="/contato">Contato</FooterLink>
        {/* Adicione outros links do footer aqui, se houver */}
      </FooterNav>
      <SocialMedia>
        {/* Links para suas redes sociais */}
        <SocialIcon href="https://facebook.com/seu-perfil" target="_blank">
          <i className="fab fa-facebook-f"></i> {/* Ícone de exemplo, se usar FontAwesome */}
          FB
        </SocialIcon>
        <SocialIcon href="https://instagram.com/seu-perfil" target="_blank">
          <i className="fab fa-instagram"></i> {/* Ícone de exemplo */}
          IG
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/seu-perfil" target="_blank">
          <i className="fab fa-linkedin-in"></i> {/* Ícone de exemplo */}
          LI
        </SocialIcon>
      </SocialMedia>
      <Copyright>
        &copy; {currentYear} Carlos Henrique Corretor. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;