import React, { useEffect, useState } from 'react';
import api from './services/api';
import './App.css';

function App() {
  const [imoveis, setImoveis] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [bairro, setBairro] = useState('');
  const [valor, setValor] = useState('');
  const [loading, setLoading] = useState(false);

  // Função para buscar os imóveis da API
  async function carregarImoveis() {
    try {
      const response = await api.get('/imoveis');
      setImoveis(response.data);
    } catch (error) {
      console.error('Erro ao buscar imóveis:', error);
    }
  }

  useEffect(() => {
    carregarImoveis();
  }, []);

  // Função para cadastrar novo imóvel
  async function handleCadastrar(e) {
    e.preventDefault();

    if (!titulo || !bairro || !valor) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    try {
      setLoading(true);
      await api.post('/imoveis', { titulo, bairro, valor });

      // Limpa o formulário e atualiza a lista
      setTitulo('');
      setBairro('');
      setValor('');
      carregarImoveis();
      alert('Imóvel cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar imóvel:', error);
      alert('Erro ao cadastrar imóvel.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🏢 ImobFlow - Gestão Imobiliária</h1>
      <p>Painel integrado com API Node.js e PostgreSQL</p>

      {/* Formulário */}
      <form onSubmit={handleCadastrar} style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '30px', border: '1px solid #dee2e6' }}>
        <h2>Cadastrar Novo Imóvel</h2>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Título:</label>
          <input 
            type="text" 
            value={titulo} 
            onChange={e => setTitulo(e.target.value)} 
            placeholder="Ex: Apartamento com 2 quartos em Valentina" 
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Bairro:</label>
          <input 
            type="text" 
            value={bairro} 
            onChange={e => setBairro(e.target.value)} 
            placeholder="Ex: Valentina" 
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Valor:</label>
          <input 
            type="text" 
            value={valor} 
            onChange={e => setValor(e.target.value)} 
            placeholder="Ex: R$ 180.000" 
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button 
          type="submit" 
          disabled={loading} 
          style={{ background: '#007bff', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {loading ? 'A cadastrar...' : 'Salvar Imóvel'}
        </button>
      </form>

      {/* Listagem */}
      <h2>Imóveis Cadastrados na Base</h2>
      {imoveis.length === 0 ? (
        <p style={{ color: '#6c757d' }}>Nenhum imóvel cadastrado de momento.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {imoveis.map(imovel => (
            <li key={imovel.id} style={{ background: '#fff', border: '1px solid #dee2e6', padding: '15px', marginBottom: '15px', borderRadius: '6px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{imovel.titulo}</h3>
              <p style={{ margin: '5px 0' }}><strong>Bairro:</strong> {imovel.bairro}</p>
              <p style={{ margin: '5px 0' }}><strong>Valor:</strong> {imovel.valor}</p>
              <small style={{ color: '#888' }}>ID: {imovel.id} | Cadastrado em: {new Date(imovel.createdAt).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;