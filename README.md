# 🏡 ImobFlow-Web: Plataforma Imobiliária Moderna (Frontend)

Uma Single Page Application (SPA) construída com React e Vite para a plataforma ImobFlow, focada em proporcionar uma experiência de usuário intuitiva e de alta performance para a visualização e gestão de imóveis. Este projeto serve como o frontend para o [ImobFlow-API](https://github.com/carloshenrique2026/imobflow-api).

## ✨ Funcionalidades Principais

*   **Exibição de Imóveis:** Página inicial com imóveis em destaque, listagem completa de todos os imóveis disponíveis e páginas de detalhes para cada propriedade.
*   **Navegação Intuitiva:** Roteamento dinâmico entre as páginas (Início, Imóveis, Sobre, Contato, Detalhes do Imóvel).
*   **Painel Administrativo (CRUD):** Interface para o corretor cadastrar, visualizar, editar e excluir imóveis.
*   **Design Responsivo:** Layout adaptável para dispositivos móveis e desktops.
*   **Comunicação com API:** Integração robusta com o backend `imobflow-api` para todas as operações de dados.

## 🚀 Tecnologias Utilizadas (Frontend)

*   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **Vite:** Ferramenta de build de nova geração para projetos frontend, focado em velocidade.
*   **React Router DOM:** Para gerenciamento de rotas e navegação na SPA.
*   **Axios:** Cliente HTTP para fazer requisições à API.
*   **Styled Components:** Para estilização de componentes de forma modular e dinâmica.
*   **JavaScript (ES Modules):** Linguagem de programação.

## ⚙️ Arquitetura do Projeto

A estrutura do projeto é modular e segue as melhores práticas para aplicações React:

src/ ├── components/ # Componentes reutilizáveis (Header, Footer, PropertyCard, HeroSection, etc.) ├── containers/ # Componentes de página/visão (HomePage, PropertiesList, PropertyDetailsPage, AdminPanel) ├── routes/ # Definição de todas as rotas da aplicação ├── services/ # Módulos para interação com a API (api.js, propertyService.js) ├── App.jsx # Componente raiz que configura o layout e o roteamento └── main.jsx # Ponto de entrada da aplicação React


## 📦 Como Executar o Projeto Localmente

Para rodar o `ImobFlow-Web`, você precisa ter o [ImobFlow-API](https://github.com/carloshenrique2026/imobflow-api) em execução.

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/carloshenrique2026/imobflow-web.git
    cd imobflow-web
    ```
2.  **Instale as dependências:**
    ```bash
    pnpm install
    # Ou npm install / yarn install, dependendo do seu gerenciador
    ```
3.  **Certifique-se de que o [ImobFlow-API](https://github.com/carloshenrique2026/imobflow-api) está rodando** em `http://localhost:3001`.
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm dev
    ```
5.  Abra seu navegador e acesse `http://localhost:5173/`.

## 📞 Contato

Desenvolvido por **Carlos Henrique **

*   [Portfólio](https://carloshenriqueprogramador.com.br/)
*   [LinkedIn](https://www.linkedin.com/in/carlos-henrique-farias-dev/) <!-- Substitua pelo seu perfil do LinkedIn -->
*   [GitHub](https://github.com/carloshenrique2026) <!-- Substitua pelo seu perfil do GitHub -->

---
**DevClub & clubHub:** Agradecimento especial à comunidade DevClub e à plataforma clubHub pelo suporte e aprendizado contínuo na jornada de desenvolvimento React.