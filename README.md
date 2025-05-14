
---

# README - Frontend da Aplicação Spotify para YouTube

Este projeto é a interface frontend de um sistema que integra o Spotify e o YouTube. Ele permite ao usuário buscar músicas de uma playlist do Spotify e visualizar os vídeos correspondentes no YouTube. O sistema é composto por uma interface interativa, onde o usuário pode buscar playlists, visualizar músicas e navegar entre elas.

## Tecnologias Utilizadas

- **React**: Framework principal para construção da interface de usuário.
- **Next.js**: Framework para React focado em renderização do lado do servidor (SSR).
- **CSS Modules**: Utilizado para o gerenciamento de estilos locais.
- **Slugify**: Biblioteca para transformar nomes de playlists em slugs amigáveis.
- **React Router**: Para navegação entre as páginas da aplicação.
- **LocalStorage**: Para armazenar temporariamente a lista de músicas da playlist.

## Funcionalidades

1. **Busca de Playlists do Spotify**: O usuário pode fornecer links para playlists, álbuns ou faixas do Spotify.
2. **Exibição de Músicas**: As músicas da playlist são exibidas na interface, permitindo que o usuário clique para reproduzir os vídeos do YouTube correspondentes.
3. **Navegação Entre Músicas**: O usuário pode navegar pelas músicas da playlist, indo para a próxima ou para a anterior.
4. **Reprodutor do YouTube**: O vídeo da música é exibido diretamente na interface de reprodução.
5. **Armazenamento Local**: As músicas são armazenadas no `localStorage` para uma navegação mais rápida.

## Instalação

### Pré-requisitos

Antes de rodar o projeto, certifique-se de ter o Node.js e o npm/yarn instalados em sua máquina.

### Passos para rodar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/wfmunizj/web-mobile-frontend.git
   cd web-mobile-frontend
   ```

2. Instale as dependências:

   Usando **npm**:

   ```bash
   npm install
   ```

   Ou usando **yarn**:

   ```bash
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   Usando **npm**:

   ```bash
   npm run dev
   ```

   Ou usando **yarn**:

   ```bash
   yarn dev
   ```

   O projeto estará disponível em `http://localhost:3000`.

## Estrutura de Diretórios

* **/pages**: Contém as páginas principais da aplicação, como a página inicial, de playlist e de música.
* **/components**: Componentes reutilizáveis da interface, como botões, inputs e progress bars.
* **/styles**: Arquivos de estilo da aplicação (CSS Modules).
* **/utils**: Funções utilitárias, como a transformação de strings para slugs.

---