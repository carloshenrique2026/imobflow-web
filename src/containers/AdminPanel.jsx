// src/containers/AdminPanel.jsx
import React, { useState, useEffect } from 'react';
// Importe o CSS que você usava para o painel. Se for o App.css, pode ser aqui:
import '../App.css'; // Ajuste o caminho se seu CSS estiver em outro lugar ou renomeie-o para AdminPanel.css

function AdminPanel() {
  // Estados para o formulário e a lista de imóveis
  const [imoveis, setImoveis] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [bairro, setBairro] = useState('');
  const [tipo, setTipo] = useState(''); // Adicionado campo tipo
  const [finalidade, setFinalidade] = useState(''); // Adicionado campo finalidade
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState(null);
  const [idEditando, setIdEditando] = useState(null);

  // URL da sua API de imóveis
  const API_URL = 'http://localhost:3001/imoveis';

  // Função para formatar o valor monetário em tempo real (R$ 0,00)
  const formatarMoeda = (e) => {
    let valorAtual = e.target.value;
    valorAtual = valorAtual.replace(/\D/g, ''); // Remove tudo que não for dígito

    if (valorAtual === '') {
      setValor('');
      return;
    }

    const numero = Number(valorAtual) / 100; // Converte para número e divide por 100 para centavos
    const valorFormatado = numero.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2, // Garante 2 casas decimais
      maximumFractionDigits: 2, // Garante 2 casas decimais
    });

    setValor(valorFormatado);
  };

  // Função para buscar todos os imóveis (GET)
  const carregarImoveis = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json(); // Pega o objeto completo { data: [...], meta: {...} }

      // A API retorna um objeto com 'data' e 'meta', então precisamos acessar 'result.data'
      if (Array.isArray(result.data)) {
        setImoveis(result.data); // Define o estado com o array de imóveis
      } else {
        console.error("Formato de dados inesperado da API ao carregar imóveis:", result);
        setImoveis([]); // Garante que 'imoveis' seja um array vazio em caso de formato inesperado
      }
    } catch (error) {
      console.error('Erro ao carregar imóveis:', error);
      setImoveis([]); // Garante que 'imoveis' seja um array vazio em caso de erro
    }
  };

  // Executa carregarImoveis uma vez ao montar o componente
  useEffect(() => {
    carregarImoveis();
  }, []);

  // Função para Cadastrar ou Atualizar Imóvel (POST / PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('bairro', bairro);
    formData.append('tipo', tipo); // Adicionado
    formData.append('finalidade', finalidade); // Adicionado

    // O valor precisa ser limpo antes de enviar, pois está formatado com R$ e vírgulas.
    // Remove tudo que não for número (R$, espaços, pontos) e substitui vírgula por ponto para float
    const valorLimpo = parseFloat(valor.replace(/[R$\s.]/g, '').replace(',', '.'));
    formData.append('valor', valorLimpo); // Envia o valor numérico

    // Anexa a imagem apenas se o usuário tiver selecionado um arquivo novo
    if (imagem) {
      formData.append('imagem', imagem);
    }

    try {
      if (idEditando) {
        // Requisição PUT para atualizar
        await fetch(`${API_URL}/${idEditando}`, {
          method: 'PUT',
          body: formData,
        });
        setIdEditando(null); // Reseta o ID de edição
      } else {
        // Requisição POST para cadastrar
        await fetch(API_URL, {
          method: 'POST',
          body: formData,
        });
      }

      // Limpa os campos do formulário após sucesso
      setTitulo('');
      setBairro('');
      setTipo('');
      setFinalidade('');
      setValor('');
      setImagem(null);

      // Reseta o valor do input file visualmente (necessário para que o mesmo arquivo possa ser selecionado novamente)
      const inputFile = document.getElementById('input-file-imovel');
      if (inputFile) inputFile.value = '';

      carregarImoveis(); // Recarrega a lista para mostrar as alterações
    } catch (error) {
      console.error('Erro ao salvar imóvel:', error);
      alert('Erro ao salvar imóvel. Verifique o console para mais detalhes.'); // Feedback ao usuário
    }
  };

  // Função para Deletar imóvel (DELETE)
  const handleDelete = async (id) => {
    if (confirm('Deseja realmente excluir este imóvel?')) {
      try {
        await fetch(`${API_URL}/${id}`, {
          method: 'DELETE',
        });
        carregarImoveis(); // Recarrega a lista após a exclusão
      } catch (error) {
        console.error('Erro ao deletar imóvel:', error);
        alert('Erro ao deletar imóvel. Verifique o console para mais detalhes.');
      }
    }
  };

  // Função para preparar o formulário para edição
  const handleEdit = (imovel) => {
    setTitulo(imovel.titulo);
    setBairro(imovel.bairro);
    setTipo(imovel.tipo || ''); // Define o tipo, com fallback para string vazia
    setFinalidade(imovel.finalidade || ''); // Define a finalidade, com fallback para string vazia

    // O valor do imóvel pode vir numérico, precisamos formatá-lo para exibir no input
    const valorFormatadoParaEdicao = imovel.valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    setValor(valorFormatadoParaEdicao);
    setImagem(null); // Limpa a imagem para que o usuário possa selecionar uma nova se quiser
    setIdEditando(imovel.id); // Define o ID do imóvel que está sendo editado
  };

  return (
    <div className="container">
      <h1>🏢 ImobFlow - Gestão Imobiliária</h1>
      <p>Painel integrado com API Node.js e PostgreSQL</p>

      {/* Formulário de Cadastro / Edição */}
      <form onSubmit={handleSubmit} className="form-card">
        <h2>{idEditando ? 'Editar Imóvel' : 'Cadastrar Novo Imóvel'}</h2>

        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ex: Apartamento com 2 quartos em Valentina"
          required
        />

        <label>Bairro:</label>
        <input
          type="text"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          placeholder="Ex: Valentina"
          required
        />

        {/* Campos Tipo e Finalidade (adicionados) */}
        <label>Tipo:</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        >
          <option value="">Selecione o Tipo</option>
          <option value="apartamento">Apartamento</option>
          <option value="casa">Casa</option>
          <option value="terreno">Terreno</option>
          <option value="comercial">Comercial</option>
        </select>

        <label>Finalidade:</label>
        <select
          value={finalidade}
          onChange={(e) => setFinalidade(e.target.value)}
          required
        >
          <option value="">Selecione a Finalidade</option>
          <option value="venda">Venda</option>
          <option value="aluguel">Aluguel</option>
        </select>

        <label>Valor:</label>
        <input
          type="text"
          value={valor}
          onChange={formatarMoeda}
          placeholder="Ex: R$ 180.000,00"
          required
        />

        <label>Foto do Imóvel:</label>
        <input
          id="input-file-imovel"
          type="file"
          accept="image/*"
          onChange={(e) => setImagem(e.target.files[0])}
        />

        <button type="submit" className="btn-salvar">
          {idEditando ? 'Atualizar Imóvel' : 'Salvar Imóvel'}
        </button>

        {idEditando && (
          <button
            type="button"
            onClick={() => {
              setIdEditando(null);
              setTitulo('');
              setBairro('');
              setTipo('');
              setFinalidade('');
              setValor('');
              setImagem(null);
              // Limpar o input de arquivo também
              const inputFile = document.getElementById('input-file-imovel');
              if (inputFile) inputFile.value = '';
            }}
            className="btn-cancelar"
          >
            Cancelar Edição
          </button>
        )}
      </form>

      {/* Lista de Imóveis */}
      <h2>Imóveis Cadastrados na Base</h2>
      <div className="lista-imoveis">
        {imoveis.length === 0 ? (
          <p>Nenhum imóvel cadastrado. Comece adicionando um!</p>
        ) : (
          imoveis.map((imovel) => (
            <div key={imovel.id} className="imovel-card">
              {imovel.imagem ? (
                <img
                  src={`http://localhost:3001/uploads/${imovel.imagem}`}
                  alt={imovel.titulo}
                  className="imovel-img"
                  style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }}
                />
              ) : (
                <div style={{ width: '100%', height: '160px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', marginBottom: '10px', color: '#666' }}>
                  Sem foto
                </div>
              )}
              <h3>{imovel.titulo}</h3>
              <p><strong>Bairro:</strong> {imovel.bairro}</p>
              <p><strong>Tipo:</strong> {imovel.tipo}</p>
              <p><strong>Finalidade:</strong> {imovel.finalidade}</p>
              <p><strong>Valor:</strong> {imovel.valor ? imovel.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'N/A'}</p>
              <div className="acoes">
                <button onClick={() => handleEdit(imovel)} className="btn-editar">✏️ Editar</button>
                <button onClick={() => handleDelete(imovel.id)} className="btn-excluir">🗑️ Excluir</button>
              </div>
              <small>ID: {imovel.id}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AdminPanel;