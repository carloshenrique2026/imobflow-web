// src/components/FeaturedProperties.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropertyCard from './PropertyCard';
import { getProperties } from '../services/propertyService';
import { Link } from 'react-router-dom';
import DefaultPropertyImage from '../assets/valentina.jpeg'; // Sua imagem de fallback

// Componente estilizado para o contêiner principal da seção de destaques
const FeaturedPropertiesContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xLarge} ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  text-align: center;
  max-width: 1200px;
  margin: ${({ theme }) => theme.spacing.xLarge} auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.medium};
    margin: ${({ theme }) => theme.spacing.large} auto;
  }
`;

// Título da seção
const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xLarge};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2em;
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8em;
  }
`;

// Grid para exibir os PropertyCards
const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  justify-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xLarge};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.medium};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

// Botão para ver todos os imóveis
const ViewAllButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.xLarge};
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-block;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}B3;
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
    font-size: 1em;
  }
`;

// Mensagens de estado // <-- ESTAS DEFINIÇÕES ESTAVAM FALTANDO!
const Message = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.lightText};
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

const ErrorMessage = styled(Message)`
  color: red;
  font-weight: bold;
`;

/**
 * Componente para exibir imóveis em destaque na página inicial.
 * Busca os imóveis da API e exibe um número limitado deles.
 */
function FeaturedProperties() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFeaturedProperties() {
      try {
        const allProperties = await getProperties();
        setFeatured(allProperties.slice(0, 3));
      } catch (err) {
        setError('Falha ao carregar imóveis em destaque.');
        console.error("Erro ao buscar imóveis em destaque:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFeaturedProperties();
  }, []);

  if (loading) {
    return <Message>Carregando destaques...</Message>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (featured.length === 0) {
    return <Message>Nenhum imóvel em destaque encontrado no momento.</Message>;
  }

  return (
    <FeaturedPropertiesContainer>
      <SectionTitle>Imóveis em Destaque</SectionTitle>
      <PropertiesGrid>
        {featured.map(property => (
          <PropertyCard
            key={property.id}
            id={property.id}
            imageUrl={property.imagemUrl || DefaultPropertyImage}
            title={property.titulo}
            location={`${property.bairro}, ${property.cidade}`}
            price={property.valor}
          />
        ))}
      </PropertiesGrid>
      <ViewAllButton to="/imoveis">Ver todos os imóveis</ViewAllButton>
    </FeaturedPropertiesContainer>
  );
}

export default FeaturedProperties;