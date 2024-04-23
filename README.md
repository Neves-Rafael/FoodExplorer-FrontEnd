![Sign up](https://github.com/Neves-Rafael/FoodExplorer-BackEnd/assets/136202919/343527f1-3467-42b1-96a4-169c4edf79c2)

O FoodExplorer é uma aplicação fullstack, utilizando as tecnologias aprendidas durante o curso Explorer, simulando um restaurante fictício de acordo com o layout disponibilizado no Figma.

O food explorer possui duas personas: o admin e o usuário;

O admin é a pessoa responsável pelo restaurante e tem o acesso para criar, visualizar, editar, apagar um prato e alterar os status de pedidos a qualquer momento. Cada prato deve conter uma imagem, nome, categoria, descrição, ingredientes e o seu preço. Ao clicar em adicionar ou editar prato será redirecionado para a página e ao finalizar receberá uma mensagem de sucesso e será redirecionado para a página principal.

O usuário irá visualizar todos os pratos cadastrados, adicionar ao carrinho, fazer um pedido, adicionar aos favoritos, acompanhar seu histórico de pedidos, atualizar seu perfil e quando clicar em um prato, será redirecionado para uma nova tela com informações mais detalhadas sobre ele.
<br/>

<a target="_blank">[Link para o deploy da aplicação](https://foodexplorer-delivery.netlify.app/) </a> <br/>
<a target="_blank">[Link para Back-End](https://github.com/Neves-Rafael/FoodExplorer-BackEnd) </a>

<br/>
<br/>

<h1 align="center">💻 Instalação</h1>

### **_Pré-requisitos_**

Antes de começar, você vai precisar ter instalado em sua máquina <a target="_blank">[NodeJs](https://nodejs.org/en) </a>, uma ferramenta de versionamento como o <a target="_blank">[GIT](https://git-scm.com/) </a>.
Além disto é recomendado um editor de código, por exemplo o<a target="_blank">[VSCode](https://code.visualstudio.com/) </a>.

### **_Configuração_**

Siga os seguintes passos para configurar e rodar a aplicação localmente:

- Clone o repositório:

  ```bash
    git clone https://github.com/Neves-Rafael/FoodExplorer-FrontEnd
  ```

- Entre no diretório e instale as dependências:

  ```bash
    npm install
  ```

- Preencha as variáveis seguindo o .env.exemplo:

  ```bash
  VITE_BASE_URL=http://localhost:3333
  ```

- Rode o servidor local:

  ```bash
    npm run dev
  ```

- Caso não ocorra nenhum erro a seguinte mensagem será apresentada:

  ```bash
    VITE v5.1.1  ready in 215 ms

  ➜  Local:   http://localhost:5173
  ```

- Para utilizar todo dos recursos acesse o localhost indicado pelo VITE:

  `http://localhost:5173`
  <br/>
  <br/>

<h1 align="center">🔧 Recursos</h1>

A aplicação possui duas personas:

- Cliente:

  - Mostrar todos os pratos
  - Mostrar um prato especifico
  - Pesquisar por um prato ou ingrediente
  - Adicionar ao carrinho os pedidos
  - Fazer um pedido
  - Adicionar prato aos favoritos
  - Acessar todos os favoritos
  - Acessar histórico de pedidos
  - Acessar status do pedido
  - Atualizar informações da conta
  - Acessar página com informações sobre o restaurante
    <br/>
    <br/>

- Administrador:

  - Mostrar todos os pratos
  - Mostrar um prato especifico
  - Pesquisar por um prato ou ingrediente
  - Acessar todos os pedidos
  - Acessar status do pedido
  - Atualizar status de pedidos
  - Atualizar informações da conta
  - Acessar página com informações sobre o restaurante
  - Cadastrar um novo prato
  - Atualizar um prato
  - Deletar um prato
  - Atualizar um pedido
    <br/>
    <br/>

<h1 align="center">📑 Funcionamento</h1>

###### _O render possui um sistema que deixa o servidor hibernando então no primeiro acesso é normal ocorrer um delay na resposta que pode durar até 1 minuto, caso ocorra aguarde essa duração que logo após o funcionamento volta ao normal._

<br/>

- ### **Fazer login**

  Assim que acessar a aplicação a tela para fazer login será apresentada com a opção de criação de conta para o primeiro acesso. Se todos os dados estiverem corretos é liberado o acesso.
  <br/>
  <br/>

- ### **Usuário**

  Dentro da aplicação o usuário tem os seguintes acessos:

  -`/` Página Home que é apresentada após o login.

  -`/plateview/:id` Página para visualização de um prato em detalhes, clicando no card que se encontra na Página inicial.

  -`/profile` Página Acessada por um botão localizado no `Header` que permite o usuário alterar os dados de sua conta.

  -`/about` Página Acessada por um botão localizado no `Header` que contem algumas informações sobre o restaurante.

  -`/favorites` Página Acessada por um botão localizado no `Header` que exibe todos os pratos adicionados aos favoritos.

  -`/order-history` Página Acessada por um botão localizado no `Header` que exibe o histórico de pedidos.

  -`/cart` Página Acessada por um botão localizado no `Header` que exibe os pratos adicionados no carrinho.

  -`/payment/:id` Página Acessada por um botão localizado na página de carrinho que gera uma solicitação e permite o usuário selecionar a forma de pagamento.

  -`/payment/qrcode/:id` Página Acessada por um botão localizado na página de pagamentos, o redirecionamento leva para uma página que simula um pagamento e atualiza o status do prato.
  <br/>

- ### **Administrador**

  Além das páginas disponíveis para os usuários o administrador tem acesso a rotas especificas:

  -`/newplate` Página Acessada por um botão localizado no `Header`
  que permite adicionar um novo prato.

  -`/editplate/:id` Página Acessada por um botão localizado no card do prato ná página Home.

  -`/order-history` Página Acessada por um botão localizado no `Header` que permite atualizar o status de todos os pedidos disponíveis.

  <br/>
  <br/>

<h1 align="center">🗂️ Requisitos</h1>

- ✅ O admin pode controlar o status de cada pedido, por um campo do tipo select. Os pedidos irão aparecer em uma tabela ao clicar em Histórico de Pedidos.
- ✅ O usuário pode marcar um prato como favorito, basta clicar no coração que aparece em cada prato.
- ✅ O usuário pode excluir um prato do carrinho e o valor total do pedido é atualizado automaticamente.
- ✅ Ao clicar no botão meu pagamento, o usuário é redirecionado para uma tela onde irá ver o seu pedido, a soma e os métodos de pagamento.
- ✅ O usuário pode incluir itens no carrinho, clicando no botão incluir. Já a quantidade é controlada pelos botões “-” e “+”.
- ✅ Um projeto estruturado, com uma boa organização das pastas, e boa divisão dos componentes.
- ✅ Funções, variáveis, classes, arquivos, tabelas e todos os outros elementos do código tem nomes significativos, de acordo com as boas práticas no mercado.
- ✅ Aplicação é responsiva, de acordo com o conceito Mobile First seguindo o modelo do Figma;
  <br/>
  <br/>

<h1 align="center">📊 Tecnologias e Licença</h1>

<p align="center"> - React - Vite - Styled-components  - React-splide - React-icons - React router dom - React-lottie - React-toastify - Javascript</p>
<br/>

<p align="center"> Uso de Licença MIT: Essa licença permite o uso, modificação e distribuição do software sem restrições. </p>
<br/>

<p align="center">Feito com ❤️ por Rafael Neves 👋🏽 <a href="https://www.linkedin.com/in/rafael-neves-profile/">Entre em Contato</a></p>
