// src/components/Testimonials.jsx
import React from 'react';
import styled from 'styled-components';

// Dados de exemplo para os depoimentos (poderiam vir de uma API)
const testimonialsData = [
  {
    id: 1,
    quote: "O Carlos Henrique foi excepcional! Encontrou o apartamento dos meus sonhos em tempo recorde e cuidou de toda a burocracia com maestria. Recomendo demais!",
    author: "Ana Carolina",
    city: "João Pessoa, PB",
  },
  {
    id: 2,
    quote: "Profissionalismo e dedicação definem o trabalho do Carlos. Me senti seguro em todas as etapas da compra do meu primeiro imóvel. Excelente atendimento!",
    author: "João Pedro",
    city: "Cabedelo, PB",
  },
  {
    id: 3,
    quote: "Vender um imóvel pode ser estressante, mas com o Carlos Henrique foi tudo muito tranquilo. Ele superou minhas expectativas e conseguiu um ótimo negócio. Muito obrigado!",
    author: "Maria Clara",
    city: "Santa Rita, PB",
  },
];

// Componente estilizado para o contêiner principal da seção de depoimentos
const TestimonialsContainer = styled.section`
  padding: 60px 20px;
  background-color: #e9ecef; /* Um fundo cinza mais escuro para contraste */
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

// Título da seção
const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 20px;
  }
`;

// Grid para os cartões de depoimentos
const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Layout responsivo */
  gap: 30px; /* Espaçamento entre os cartões */
  width: 100%; /* Ocupa a largura total */
  max-width: 1000px; /* Limita a largura do grid */
`;

// Estilo para cada cartão de depoimento
const TestimonialCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Empurra o rodapé para baixo */
  text-align: left;
  min-height: 220px; /* Altura mínima para os cartões */

  p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #444;
    margin-bottom: 20px;
    font-style: italic; /* Texto em itálico para citação */
  }

  footer {
    font-size: 0.95em;
    color: #777;
    font-weight: bold;
    border-top: 1px solid #eee;
    padding-top: 15px;
  }
`;

/**
 * Componente para a seção de depoimentos na página inicial.
 * Exibe depoimentos de clientes em um formato de cartão.
 */
function Testimonials() { // <-- CONFIRME QUE O NOME DA FUNÇÃO É EXATAMENTE "Testimonials"
  return (
    <TestimonialsContainer>
      <SectionTitle>O que dizem os nossos clientes</SectionTitle>
      <TestimonialsGrid>
        {testimonialsData.map(testimonial => (
          <TestimonialCard key={testimonial.id}>
            <p>"{testimonial.quote}"</p>
            <footer>
              — {testimonial.author} <br />
              <small>{testimonial.city}</small>
            </footer>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
}

export default Testimonials; // <-- CONFIRME QUE ESTA LINHA ESTÁ AQUI NO FINAL E EXATAMENTE ASSIM