// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../assets/mylogomarca.jpg'; // Sua logo

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary}; /* Azul principal */
  color: white;
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large}; /* Padding superior/inferior e lateral */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  flex-wrap: wrap; /* Permite que os itens quebrem linha em telas menores */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    padding: ${({ theme }) => theme.spacing.medium}; /* Ajuste de padding para tablet */
  }
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: ${({ theme }) => theme.spacing.xLarge}; /* Espaço maior à direita para nav */
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    margin-right: 0;
  }
`;

const StyledLogoImage = styled.img`
  height: 50px; /* Ajuste a altura da sua logo para ser um pouco maior */
  width: auto;
  /* Se sua logo já tem o texto "Carlos Henrique Corretor", não precisa de margin-right adicional */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 40px; /* Ajuste para telas menores */
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large}; /* Espaçamento entre os links */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
    width: 100%; /* Ocupa a largura total para links em coluna */
    margin-bottom: ${({ theme }) => theme.spacing.medium};
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
    background-color: ${({ theme }) => theme.colors.primary}B3; /* Cor mais escura ao hover */
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.spacing.medium};
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
      <Logo to="/">
        <StyledLogoImage src={LogoImage} alt="Carlos Henrique Corretor Logo" />
      </Logo>
      <Nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/imoveis">Imóveis</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        {/* Opcional: Link para o painel administrativo */}
        {/* <NavLink to="/admin">Admin</NavLink> */}
      </Nav>
      <SocialLinks>
        {/* Links para suas redes sociais */}
        <SocialIcon href="https://facebook.com/seu-perfil" target="_blank">FB</SocialIcon>
        <SocialIcon href="https://instagram.com/seu-perfil" target="_blank">IG</SocialIcon>
        <SocialIcon href="https://linkedin.com/seu-perfil" target="_blank">LI</SocialIcon>
      </SocialLinks>
    </HeaderContainer>
  );
}

export default Header;