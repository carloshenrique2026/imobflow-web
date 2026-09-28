Falha na consulta
Com base na análise do seu projeto ImobFlow - Gestão Imobiliária (http://localhost:5173/), preparei uma estrutura completa e profissional de README.md pronta para você utilizar no seu repositório GitHub.

🏢 ImobFlow - Gestão Imobiliária
Painel integrado de gestão imobiliária desenvolvido com uma API Node.js, banco de dados PostgreSQL e interface frontend moderna.

🚀 Sobre o Projeto
O ImobFlow é um sistema voltado para o setor imobiliário que simplifica o cadastro e o gerenciamento de propriedades. A aplicação integra uma interface web responsiva a um backend robusto, permitindo o registro rápido de imóveis com informações essenciais como título, localização (bairro) e valor de mercado.

🛠️ Tecnologias Utilizadas
Frontend: React.js / Vite (imobflow-web)

Backend: Node.js com arquitetura de API REST

Banco de Dados: PostgreSQL

📋 Funcionalidades
Cadastro de Imóveis: Formulário dinâmico para inserção de novos imóveis informando:

Título (Ex: Apartamento com 2 quartos)

Bairro (Ex: Valentina)

Valor (Ex: R$ 175.000)

Painel de Listagem em Tempo Real: Exibição dos imóveis salvos na base de dados com controle de ID e data de cadastro.

Exemplo de Estrutura Cadastrada no Sistema:
Título: 2 quartos bancários

Bairro: Valentina

Valor: R$ 175.000,00

💻 Como Executar o Projeto
Clone o repositório:

Bash
git clone <https://github.com/carloshenrique2026/imobflow-web>
Configuração do Backend:

Navegue até a pasta do servidor e instale as dependências:

npm install

* Configure o arquivo `.env` com suas credenciais de conexão do PostgreSQL.
* Inicie o servidor:
```bash
npm run dev
Configuração do Frontend:

Navegue até a pasta do projeto web (imobflow-web) e instale as dependências:

npm install

* Inicie a aplicação em ambiente de desenvolvimento:
```bash
npm run dev
Acesse no navegador: http://localhost:5173/