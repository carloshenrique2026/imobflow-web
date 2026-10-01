// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #007bff; /* Cor azul do site de referência */
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8em;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    color: #e0e0e0;
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
    margin-right: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1em;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.3em;
  text-decoration: none;

  &:hover {
    color: #e0e0e0;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo to="/">Carlos Henrique Corretor</Logo> {/* Logo clicável */}
      <Nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/imoveis">Imóveis</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        {/* Opcional: Link para o painel administrativo */}
        {/* <NavLink to="/admin">Admin</NavLink> */}
      </Nav>
      <SocialLinks>
        {/* Ícones de redes sociais (use ícones reais como FontAwesome se quiser) */}
        <SocialIcon href="https://facebook.com/seu-perfil" target="_blank">FB</SocialIcon>
        <SocialIcon href="https://instagram.com/seu-perfil" target="_blank">IG</SocialIcon>
        <SocialIcon href="https://linkedin.com/seu-perfil" target="_blank">LI</SocialIcon>
      </SocialLinks>
    </HeaderContainer>
  );
}

export default Header; // <-- ESSA LINHA É CRÍTICA!