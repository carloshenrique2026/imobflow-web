// src/containers/AboutPage.jsx
import React from 'react';
import styled from 'styled-components';

// Componente estilizado para o contêiner principal da página "Sobre"
const AboutPageContainer = styled.div`
  padding: 60px 20px;
  background-color: #f8f9fa; /* Fundo suave */
  max-width: 1000px; /* Largura máxima para o conteúdo */
  margin: 30px auto; /* Centraliza na página com margem superior/inferior */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Sombra suave */

  @media (max-width: 768px) {
    padding: 40px 15px;
    margin: 20px auto;
  }
`;

// Título principal da página
const PageTitle = styled.h1`
  font-size: 3em;
  color: #007bff; /* Cor de destaque */
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2.5em;
    margin-bottom: 30px;
  }
`;

// Contêiner para a imagem e o texto principal
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Conteúdo em coluna por padrão */
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;

  @media (min-width: 769px) {
    flex-direction: row; /* Em telas maiores, imagem e texto ficam lado a lado */
    text-align: left;
    align-items: flex-start; /* Alinha o conteúdo ao topo */
  }
`;

// Imagem do corretor
const CorretorImage = styled.img`
  width: 250px; /* Largura da imagem */
  height: 250px; /* Altura da imagem */
  border-radius: 8px; /* Bordas levemente arredondadas */
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

// Bloco de texto principal
const MainText = styled.div`
  flex: 1; /* Ocupa o espaço restante */
  p {
    font-size: 1.1em;
    line-height: 1.7;
    color: #444;
    margin-bottom: 15px;
    text-align: justify; /* Justifica o texto para melhor leitura */
  }
  strong {
    color: #333;
  }

  @media (max-width: 768px) {
    text-align: center; /* Centraliza o texto em telas menores */
  }
`;

// Seções adicionais (missão, visão, valores)
const SectionBlock = styled.div`
  margin-top: 30px;
  h2 {
    font-size: 2em;
    color: #333;
    margin-bottom: 15px;
    text-align: center;
  }
  ul {
    list-style: none; /* Remove marcadores de lista padrão */
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  li {
    background-color: #e0e7ff; /* Cor de fundo para itens da lista */
    padding: 15px;
    border-radius: 5px;
    color: #004085;
    font-size: 1em;
    line-height: 1.5;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    text-align: left;
  }

  @media (min-width: 769px) {
    ul {
      flex-direction: row; /* Em telas maiores, os itens da lista podem ficar lado a lado */
      justify-content: space-around;
      flex-wrap: wrap; /* Permite que os itens quebrem linha se necessário */
    }
    li {
      flex-basis: calc(33% - 20px); /* Ocupa 1/3 da largura, com espaçamento */
      margin: 10px;
    }
  }
`;

/**
 * Componente da Página "Sobre" (AboutPage).
 * Contém informações detalhadas sobre o corretor, sua missão e valores.
 */
function AboutPage() {
  return (
    <AboutPageContainer>
      <PageTitle>Quem Sou Eu</PageTitle>

      <ContentWrapper>
        {/* Use a URL da imagem do corretor do site de referência ou uma sua */}
        <CorretorImage src="https://carloshenriquecorretor.com.br/wp-content/uploads/2023/12/carlos.jpg" alt="Carlos Henrique Corretor" />
        <MainText>
          <p>
            Olá! Sou <strong>Carlos Henrique</strong>, seu corretor de imóveis dedicado em João Pessoa e toda a região da Paraíba. Com o CRECI 13610, minha jornada no mercado imobiliário é pautada pela paixão em conectar pessoas aos seus lares e investimentos ideais.
          </p>
          <p>
            Minha experiência abrange um profundo conhecimento do mercado local, tendências e, acima de tudo, das necessidades individuais de cada cliente. Acredito que a compra ou venda de um imóvel é um dos passos mais importantes na vida de alguém, e por isso, ofereço um acompanhamento completo, desde a primeira conversa até a concretização do negócio.
          </p>
          <p>
            Seja para encontrar a casa dos seus sonhos, um apartamento moderno, um terreno para construir ou um imóvel comercial estratégico, estou aqui para garantir que sua experiência seja tranquila, segura e, acima de tudo, bem-sucedida.
          </p>
        </MainText>
      </ContentWrapper>

      <SectionBlock>
        <h2>Minha Missão e Valores</h2>
        <ul>
          <li>
            <strong>Missão:</strong> Transformar sonhos em realidade, oferecendo soluções imobiliárias personalizadas com excelência, transparência e ética.
          </li>
          <li>
            <strong>Visão:</strong> Ser referência no mercado imobiliário da Paraíba, reconhecido pela inovação, confiança e satisfação plena dos clientes.
          </li>
          <li>
            <strong>Valores:</strong> Integridade, Comprometimento, Transparência, Excelência no Atendimento e Respeito.
          </li>
        </ul>
      </SectionBlock>

      {/* Você pode adicionar mais seções aqui, como "Minha Experiência", "Depoimentos" (reutilizando o componente), etc. */}

    </AboutPageContainer>
  );
}

export default AboutPage;