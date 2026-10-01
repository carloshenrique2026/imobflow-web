// src/components/PropertyCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Para navegar para a página de detalhes
import styled from 'styled-components'; // Assumindo que você instalou styled-components

// Componentes estilizados usando styled-components
const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 300px; /* Largura fixa para demonstração. Pode ser ajustado com Flexbox/Grid */
  display: flex;
  flex-direction: column;
  background-color: #fff;
  transition: transform 0.2s ease-in-out;
  margin: 10px; /* Espaçamento entre os cards */

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover; /* Garante que a imagem cubra o espaço sem distorcer */
`;

const CardContent = styled.div`
  padding: 15px;
  flex-grow: 1; /* Faz o conteúdo ocupar o espaço restante, empurrando o botão para baixo */
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.3em;
  margin-bottom: 8px;
  color: #333;
  white-space: nowrap; /* Evita que o título quebre linha */
  overflow: hidden; /* Esconde o texto que excede a largura */
  text-overflow: ellipsis; /* Adiciona "..." ao final do texto cortado */
`;

const CardLocation = styled.p`
  font-size: 0.9em;
  color: #666;
  margin-bottom: 5px;
`;

const CardPrice = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 15px;
  margin-top: auto; /* Empurra o preço para baixo, acima do botão */
`;

const CardButton = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;
  margin-top: 10px; /* Espaçamento acima do botão */

  &:hover {
    background-color: #0056b3;
  }
`;

// Componente funcional PropertyCard
function PropertyCard({ id, imageUrl, title, location, price }) {
  // O backend ImobFlow provavelmente não tem um campo 'imageUrl' por padrão.
  // Usamos um placeholder se a URL não for fornecida.
  const finalImageUrl = imageUrl || 'https://via.placeholder.com/300x200?text=Sem+Foto';

  return (
    <Card>
      <CardImage src={finalImageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardLocation>{location}</CardLocation>
        {/* Formata o preço para moeda brasileira */}
        <CardPrice>R$ {price ? price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 'Preço não informado'}</CardPrice>
        {/* O Link vai para a rota de detalhes do imóvel, que criaremos depois */}
        <CardButton to={`/imovel/${id}`}>Ver Detalhes</CardButton>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;