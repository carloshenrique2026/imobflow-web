// src/containers/PropertyDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para pegar o ID da URL
import { getPropertyById } from '../services/propertyService'; // Para buscar os detalhes
import styled from 'styled-components'; // Ou seu método de estilização preferido

const DetailsContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const PropertyImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const PropertyTitle = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 10px;
`;

const PropertyPrice = styled.p`
  font-size: 1.8em;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 20px;
`;

const PropertyInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;

  p {
    margin: 0;
    font-size: 1em;
    color: #555;
    strong {
      color: #333;
    }
  }
`;

const PropertyDescription = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #444;
  margin-bottom: 20px;
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

function PropertyDetailsPage() {
  const { id } = useParams(); // Pega o ID da URL
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPropertyDetails() {
      try {
        const data = await getPropertyById(id); // Chama o serviço para buscar o imóvel pelo ID
        setProperty(data);
      } catch (err) {
        setError(`Falha ao carregar detalhes do imóvel ${id}.`);
        console.error("Erro ao buscar detalhes do imóvel:", err);
      } finally {
        setLoading(false);
      }
    }

    if (id) { // Garante que só busca se tiver um ID
      fetchPropertyDetails();
    }
  }, [id]); // Dependência no ID: refaz a busca se o ID mudar na URL

  if (loading) {
    return <Message>Carregando detalhes do imóvel...</Message>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!property) {
    return <Message>Imóvel não encontrado.</Message>;
  }

  return (
    <DetailsContainer>
      {property.imagemUrl && <PropertyImage src={property.imagemUrl} alt={property.titulo} />}
      <PropertyTitle>{property.titulo}</PropertyTitle>
      <PropertyPrice>
        {property.valor ? property.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'Preço não informado'}
      </PropertyPrice>

      <PropertyInfo>
        <p><strong>Tipo:</strong> {property.tipo}</p>
        <p><strong>Finalidade:</strong> {property.finalidade}</p>
        <p><strong>Bairro:</strong> {property.bairro}</p>
        <p><strong>Cidade:</strong> {property.cidade}</p>
        {property.area && <p><strong>Área:</strong> {property.area} m²</p>}
        {property.quartos && <p><strong>Quartos:</strong> {property.quartos}</p>}
        {property.banheiros && <p><strong>Banheiros:</strong> {property.banheiros}</p>}
        {property.vagas && <p><strong>Vagas:</strong> {property.vagas}</p>}
        <p><strong>Status:</strong> {property.status}</p>
      </PropertyInfo>

      {property.descricao && (
        <>
          <h3>Descrição:</h3>
          <PropertyDescription>{property.descricao}</PropertyDescription>
        </>
      )}

      {/* Você pode adicionar um botão de "Voltar" ou um formulário de contato aqui */}
    </DetailsContainer>
  );
}

export default PropertyDetailsPage;