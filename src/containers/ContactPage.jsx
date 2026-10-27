// src/containers/ContactPage.jsx
import React, { useState } from 'react'; // Importa React e o hook useState
import styled from 'styled-components'; // Para estilização

// Componente estilizado para o contêiner principal da página de contato
const ContactPageContainer = styled.div`
  padding: 60px 20px;
  background-color: #f8f9fa;
  max-width: 1000px;
  margin: 30px auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 40px 15px;
    margin: 20px auto;
  }
`;

// Título principal da página
const PageTitle = styled.h1`
  font-size: 3em;
  color: #007bff;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2.5em;
    margin-bottom: 30px;
  }
`;

// Contêiner flexível para o formulário e as informações de contato
const ContentWrapper = styled.div`
  display: flex;
  gap: 40px; /* Espaço entre o formulário e as infos */

  @media (max-width: 768px) {
    flex-direction: column; /* Em telas menores, ficam em coluna */
    gap: 30px;
  }
`;

// Estilos para o formulário de contato
const ContactForm = styled.form`
  flex: 2; /* Ocupa mais espaço */
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 2em;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }

  label {
    font-weight: bold;
    color: #555;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  textarea {
    resize: vertical; /* Permite redimensionar verticalmente */
    min-height: 120px;
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 15px 25px;
    border: none;
    border-radius: 5px;
    font-size: 1.1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }
  }
`;

// Estilos para as informações de contato
const ContactInfoBlock = styled.div`
  flex: 1; /* Ocupa menos espaço */
  padding: 25px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  h2 {
    font-size: 2em;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
  p {
    font-size: 1em;
    color: #555;
    margin-bottom: 10px;
    line-height: 1.6;
  }
  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  strong {
    color: #333;
  }
`;

/**
 * Componente da Página de Contato (ContactPage).
 * Inclui um formulário de contato e informações de contato.
 */
function ContactPage() {
  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Função para atualizar o estado do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    console.log('Dados do formulário enviados:', formData);
    alert('Mensagem enviada! (Verifique o console para os dados)');
    // Em um projeto real, aqui você faria uma requisição POST para sua API
    // Ex: await api.post('/contato', formData);

    // Limpa o formulário após o envio
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <ContactPageContainer>
      <PageTitle>Entre em Contato</PageTitle>

      <ContentWrapper>
        <ContactForm onSubmit={handleSubmit}>
          <h2>Envie sua Mensagem</h2>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            required
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seuemail@exemplo.com"
            required
          />

          <label htmlFor="phone">Telefone (opcional):</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(XX) XXXXX-XXXX"
          />

          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Digite sua mensagem aqui..."
            required
          ></textarea>

          <button type="submit">Enviar Mensagem</button>
        </ContactForm>

        <ContactInfoBlock>
          <h2>Informações de Contato</h2>
          <p>
            <strong>Telefone:</strong> <a href="tel:+5583999999999">(83) 99999-9999</a>
          </p>
          <p>
            <strong>E-mail:</strong> <a href="mailto:carloshenrique@email.com">carloshenrique@email.com</a>
          </p>
          <p>
            <strong>Endereço:</strong> Rua Exemplo, 123 - Bairro Centro, João Pessoa - PB
          </p>
          <p>
            <strong>Horário de Atendimento:</strong> <br />
            Segunda a Sexta: 08:00 - 18:00 <br />
            Sábado: 09:00 - 13:00
          </p>
          {/* Você pode adicionar um mapa aqui futuramente */}
          {/* <MapComponent /> */}
        </ContactInfoBlock>
      </ContentWrapper>
    </ContactPageContainer>
  );
}

export default ContactPage;