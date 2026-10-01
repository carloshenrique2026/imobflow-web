// src/components/Layout.jsx
import React from 'react';
import Header from './Header'; // Crie este componente
import Footer from './Footer'; // Crie este componente
import WhatsAppButton from './WhatsAppButton'; // Crie este componente
import styled from 'styled-components';

const ContentWrapper = styled.div`
  flex-grow: 1; /* Faz o conteúdo ocupar o espaço restante */
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o layout ocupe a altura total da viewport */
`;

function Layout({ children }) {
  return (
    <PageLayout>
      <Header />
      <ContentWrapper>
        {children} {/* Aqui será renderizado o conteúdo da rota atual */}
      </ContentWrapper>
      <Footer />
      <WhatsAppButton />
    </PageLayout>
  );
}

export default Layout;