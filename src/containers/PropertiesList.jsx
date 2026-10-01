// src/containers/PropertiesList.jsx
import React, { useState, useEffect } from 'react';
import { getProperties } from '../services/propertyService'; // Importa a função de serviço
import PropertyCard from '../components/PropertyCard'; // Importa o componente do card
import styled from 'styled-components'; // Para estilizar

// Estilos usando styled-components
const PropertiesListContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f8f9fa; /* Um fundo claro para a página */
  min-height: 100vh; /* Garante que o container ocupe a altura total da viewport */
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 2.5em;
  padding-top: 20px;
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Layout responsivo */
  gap: 25px; /* Espaçamento entre os cards */
  justify-items: center; /* Centraliza os itens no grid */
`;

const Message = styled.div`
    text-align: center;
    margin-top: 50px;
    font-size: 1.2em;
    color: #555;
`;

const ErrorMessage = styled(Message)`
    color: red;
    font-weight: bold;
`;

function PropertiesList() {
  // Estado para armazenar a lista de imóveis
  const [properties, setProperties] = useState([]);
  // Estado para controlar o carregamento
  const [loading, setLoading] = useState(true);
  // Estado para armazenar mensagens de erro
  const [error, setError] = useState(null);

  // useEffect para buscar os imóveis quando o componente montar
  useEffect(() => {
    async function fetchPropertiesData() {
      try {
        const data = await getProperties(); // Chama a função do serviço
        setProperties(data); // Atualiza o estado com os imóveis recebidos
      } catch (err) {
        // Se houver um erro, define a mensagem de erro
        setError('Falha ao carregar imóveis. Verifique se o backend está rodando em http://localhost:3001 e tente novamente.');
        console.error("Erro detalhado na busca de imóveis:", err);
      } finally {
        setLoading(false); // Indica que o carregamento terminou, independente do resultado
      }
    }

    fetchPropertiesData();
  }, []); // Array de dependências vazio: executa apenas uma vez ao montar o componente

  // Renderização condicional baseada no estado
  if (loading) {
    return <Message>Carregando imóveis...</Message>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  // Se não houver imóveis e não houver erro, exibe uma mensagem
  if (properties.length === 0) {
    return <Message>Nenhum imóvel encontrado no momento.</Message>;
  }

  return (
    <PropertiesListContainer>
      <Title>Imóveis Disponíveis</Title>
      <PropertiesGrid>
        {/* Mapeia o array de imóveis para renderizar um PropertyCard para cada um */}
        {properties.map(property => (
          <PropertyCard
            key={property.id} // Chave única para cada item na lista (muito importante para o React)
            id={property.id}
            // Mapeie os campos do seu backend para as props do PropertyCard
            // O backend ImobFlow tem 'valor', 'imagemUrl', 'titulo', 'bairro', 'cidade', 'tipo', etc.
            imageUrl={property.imagemUrl} // Usar o campo 'imagemUrl' do seu backend
            title={property.titulo}
            location={`${property.bairro}, ${property.cidade}`}
            price={property.valor}
          />
        ))}
      </PropertiesGrid>
    </PropertiesListContainer>
  );
}

export default PropertiesList;