# 🎮 Zona do Jogo - Portal de Jogos Online 🎮

## 🚀 Visão Geral do Projeto

O projeto "Zona do Jogo" é um portal de jogos online moderno e responsivo, desenvolvido para oferecer uma experiência de jogo imersiva e acessível diretamente no navegador. Com um design vibrante e uma interface intuitiva, o site foi construído utilizando as tecnologias web fundamentais: HTML5, CSS3 e JavaScript puro, sem a dependência de frameworks. O objetivo principal é proporcionar aos usuários uma plataforma divertida e leve, onde podem desfrutar de jogos clássicos e novos títulos sem a necessidade de downloads ou instalações complexas.

Este README.md detalha a estrutura do projeto, as tecnologias utilizadas, as funcionalidades implementadas, e as instruções para configurar e executar o site localmente. Além disso, são apresentadas as possibilidades de expansão futura, visando aprimorar ainda mais a experiência do usuário e a capacidade da plataforma.

## ✨ Funcionalidades Principais

O site "Zona do Jogo" foi projetado com foco na usabilidade e na diversão, incorporando as seguintes funcionalidades:

- **Navegação Intuitiva**: Uma estrutura de menu clara e responsiva que permite aos usuários alternar facilmente entre as diferentes seções do site.
- **Jogos Integrados**: Inclusão de jogos HTML5 jogáveis diretamente no navegador, como Snake e Flappy Bird, proporcionando entretenimento imediato.
- **Filtragem de Jogos**: Na página de jogos, os usuários podem filtrar os títulos por categoria (Ação, Retrô, Puzzle), facilitando a descoberta de novos jogos de seu interesse.
- **Design Responsivo**: O layout do site se adapta perfeitamente a diferentes tamanhos de tela, garantindo uma experiência consistente em dispositivos desktop, tablets e smartphones.
- **Estilo Visual Atraente**: Um tema visual inspirado em games retrô, com cores neon vibrantes e tipografia pixelada, criando uma atmosfera nostálgica e envolvente.
- **Estrutura Modular**: O código é organizado de forma modular, com arquivos HTML, CSS e JavaScript separados, o que facilita a manutenção, a depuração e a adição de novas funcionalidades.
- **Código Comentado**: O código-fonte é amplamente comentado, tornando-o compreensível para desenvolvedores que desejam contribuir ou expandir o projeto.

## 💻 Tecnologias Utilizadas

Para garantir a leveza, performance e compatibilidade do site, foram utilizadas as seguintes tecnologias:

- **HTML5**: Linguagem de marcação para estruturar o conteúdo das páginas web.
- **CSS3**: Linguagem de estilo para definir a apresentação visual do site, incluindo cores, fontes, layout e responsividade.
- **JavaScript (Puro)**: Linguagem de programação para implementar a lógica interativa do site, como a navegação dinâmica, filtros e a funcionalidade dos jogos.

Não foram utilizados frameworks ou bibliotecas externas para o desenvolvimento do frontend, garantindo um controle total sobre o código e otimizando o desempenho.



## 📁 Estrutura de Arquivos

A organização dos arquivos do projeto segue uma estrutura lógica para facilitar a navegação e a manutenção:

```
zona_do_jogo/
├── index.html              # Página inicial do site
├── jogos.html              # Página de listagem de todos os jogos
├── jogo.html               # Página individual para exibir um jogo específico
├── assets/
│   ├── css/
│   │   └── style.css       # Arquivo CSS principal com todos os estilos do site
│   ├── js/
│   │   ├── main.js         # Script JavaScript principal (menu, filtros, etc.)
│   │   └── jogos.js        # Script JavaScript para carregar e gerenciar os jogos
│   ├── img/
│   │   ├── logo.svg        # Logotipo do site
│   │   ├── banner.jpg      # Imagem do banner principal
│   │   ├── snake.jpg       # Imagem de destaque para o jogo Snake
│   │   ├── flappy.jpg      # Imagem de destaque para o jogo Flappy Bird
│   │   ├── puzzle.jpg      # Imagem de destaque para jogos de Puzzle
│   │   ├── action.jpg      # Imagem de destaque para jogos de Ação
│   │   ├── instagram.svg   # Ícone do Instagram
│   │   ├── youtube.svg     # Ícone do YouTube
│   │   └── tiktok.svg      # Ícone do TikTok
│   └── fonts/
│       └── (fontes baixadas) # Diretório para fontes personalizadas (ex: Press Start 2P)
└── todo.md                 # Arquivo de acompanhamento de tarefas (para desenvolvimento)
```




## ⚙️ Como Executar o Projeto Localmente

Para visualizar e interagir com o site "Zona do Jogo" em seu ambiente local, siga os passos abaixo:

1. **Clone ou Baixe o Repositório**:
   Se você recebeu o projeto como um arquivo ZIP, descompacte-o em um diretório de sua preferência. Se o projeto estiver em um repositório Git, clone-o usando o comando:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd zona_do_jogo
   ```

2. **Abra o Arquivo `index.html`**:
   Navegue até o diretório raiz do projeto (`zona_do_jogo/`) e simplesmente abra o arquivo `index.html` em seu navegador web preferido (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.). Você pode fazer isso clicando duas vezes no arquivo ou arrastando-o para a janela do navegador.

   ```
   # Exemplo de caminho no seu sistema de arquivos
   file:///C:/caminho/para/zona_do_jogo/index.html  (Windows)
   file:///home/seu_usuario/zona_do_jogo/index.html (Linux/macOS)
   ```

   **Observação**: Como o projeto utiliza apenas HTML, CSS e JavaScript puro e não faz requisições a APIs externas ou recursos que exijam um servidor web, não é necessário configurar um servidor local (como Apache, Nginx ou Node.js) para executá-lo. O site funcionará diretamente a partir do seu sistema de arquivos.

3. **Explore o Site**:
   Após abrir o `index.html`, você poderá navegar por todas as páginas, testar os filtros de jogos e jogar os games integrados.

## 🎮 Jogos Integrados

Atualmente, o site inclui os seguintes jogos HTML5:

- **Snake**: O clássico jogo da cobrinha. Use as setas do teclado para controlar a cobra, comer as frutas e crescer sem colidir com as paredes ou com o próprio corpo.
- **Flappy Bird**: Um jogo de arcade desafiador. Clique na tela ou pressione a barra de espaço para fazer o pássaro voar e desviar dos canos.

**Como adicionar novos jogos**: Para integrar novos jogos HTML5, você pode seguir o padrão existente no arquivo `assets/js/jogos.js`. Cada jogo é uma função JavaScript que manipula um `<canvas>` ou `<iframe>` na página `jogo.html`. Certifique-se de adicionar as informações do novo jogo ao objeto `jogos` no `jogos.js` e criar a função de carregamento correspondente.




## 🔮 Expansões Futuras

O projeto "Zona do Jogo" foi concebido com a flexibilidade em mente, permitindo futuras expansões e melhorias. Algumas das funcionalidades planejadas incluem:

- **Sistema de Login e Perfil de Usuário**: Implementação de um sistema de autenticação para que os usuários possam criar perfis, salvar seu progresso nos jogos e personalizar sua experiência.
- **Rankings e Pontuações**: Adição de tabelas de classificação globais e por jogo, incentivando a competição e o engajamento dos usuários.
- **Mais Jogos**: Expansão contínua da biblioteca de jogos, incluindo novos títulos em diversas categorias.
- **Comentários e Avaliações**: Funcionalidades para que os usuários possam comentar e avaliar os jogos, criando uma comunidade interativa.
- **Otimização de Performance**: Melhorias contínuas na performance e no carregamento das páginas para garantir uma experiência ainda mais fluida.

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja aprimorar este projeto, sinta-se à vontade para fazer um fork do repositório, implementar suas melhorias e enviar um pull request. Por favor, siga as boas práticas de codificação e mantenha o código comentado.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

