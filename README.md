# rick_and_morty

> Motivação

Foi criado para fins didáticos, se trata de uma simples página que mostra os cards de personagens da serie animada rick and morty, e mostra algumas informações dos mesmos. 

> Para rodar a aplicação 

Pode acessar aqui : https://rick-and-morty-psi-cyan.vercel.app/

Ou você pode clonar o repositório em sua maquina local e rodar os seguintes comandos.

yarn  || npm install

> Aplicação

Se trata de uma spa(single page application), que se trata de pagina que consiste em uma única página web com o objetivo de fornecer uma experiência do usuário similar à de um aplicativo desktop. Em um SPA, todo o código necessário - HTML, JavaScript, e CSS – ou é obtido com um único carregamento de página, ou os recursos apropriados são carregados dinamicamente e adicionados à página conforme necessário, geralmente em resposta a ações do usuário. 

A página não é recarregada em qualquer momento do processo, tampouco ocorre a transferência de controle para outra página, embora a URL no navegador ou a API de história do HTML5 possam ser usadas para fornecer a percepção e navegabilidade de páginas separadas ao aplicativo. Interação com aplicativos de página única muitas vezes envolve comunicação dinâmica com o servidor web por trás dos bastidores.

> Ferramentas utilizadas

React js - usada para criar e gerenciar a virtual DOM 
Styled Components - usada para estilizar os componentes da página
Axios - biblioteca usada para consumir a Api
Vercel - Biblioteca que gerencia o sistema de deploy da aplicação

> Components 

Cards -  Responsável renderizar os cards em tela atraves dos dados obtidos da requisição get da rest Api.

> Estruturação 

Mesmo se tratando de uma simples pagina que mostra os cards é importante que cada uma das responsabilidades estejam bem separadas, pensando em uma possivel escalonaçao do projeto.
Dessa feita utilizando o useContext para compartilhar os states dos personagens para aplicação. 

