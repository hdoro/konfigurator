export default `
# React para designers

O objetivo deste guia é explicar, do jeito mais simples e breve possível, o que é o [React](https://reactjs.org) e o que ele implica para você como _designer_ na criação de interfaces e sites.

## O que é o React

**Definição:** React é uma biblioteca de _javascript_ (_framework_) que facilita a construção de interfaces dinâmicas e sites. Destrinchando essa definição:

- _javascript_ é a linguagem de programação nativa aos navegadores e à _web_ que traz **interatividade e lógica** para sites e aplicativos. É ela que permite, por exemplo, pegar a entrada de dados em um formulário e enviar isso para um servidor atualizar os dados de um usuário.
- Uma biblioteca é simplesmente um repositório de códigos (uma pasta com arquivos) que atendem a um objetivo específico.
- Interfaces e sites, quando construídas do zero, podem ser difíceis difíceis de administrar e organizar, e você acaba tendo que escrever muito código desnecessário. O React te dá uma série de ferramentas que facilitam esse processo, mas existem muitas outras no mercado. Existem algumas razões para termos escolhido o React:
  - Ele **foi criado pelo Facebook** pra estruturar quase todos os produtos deles (Instagram, Facebook, WhatsApp...), e atualmente a empresa paga uma equipe foda pra fazer a manutenção e evolução da biblioteca.
  - No mundo dos _frameworks_ para sites, ele reina. Geral conhece, muita gente usa e tem um ecossistema extremamente forte ao redor da biblioteca, então temos muitas ferramentas e recursos a respeito.
  - Ele é relativamente fácil de aprender e muito capaz, com vários conceitos e abstrações massa de usar

## Os princípios do React

A biblioteca parte de três princípios básicos: os **componentes**, as _**props**_ e o _**state**_. Todo o modo de pensar e trabalhar com React gira em torno desses conceitos, e eles são cruciais até mesmo pro design visual, como veremos já já ;)

### Componentes

Você pode pensar no React como uma **grande caixa de legos**: a ideia é que você vai pegar cada pecinha individual e combiná-las pra criar um produto final. Cada pecinha, ou _componente_, tem um formato e papel na estrutura de um castelo de lego, por exemplo, e elas podem ser compostas de outras pecinhas maiores. Essa divisão é massa porque permite que você utilize a mesma peça padronizada - por exemplo, a torre do castelo - diversas vezes no produto, sem esforço.

![Imagem de castelo de lego decomposto em componentes](/media/diagrama-castelo.jpg)

A imagem acima sumariza bem essa relação de componentes:

- Você tem um componente \`castelo\` que engloba tudo;
- Esse \`castelo\` é composto, entre outros, por um componente \`torre\`, que é utilizado duas vezes;
- A \`torre\` tem 3 subcomponentes: \`topo\`, \`janela\` e \`base\`;
- Esse subcomponentes, por sua parte, também são compostos por outros componentes. No caso do \`topo\`, ele tem alguns tipos de blocos específicos, como o \`blocoVerm\` e o \`blocoDiagonal\`.

### _Props_

Essa ideia de "componetização" ajuda a poupar um trampo bom, porque criamos peças que vão ser reutilizadas... mas se elas só podem ser usadas de uma única forma, não são tão úteis assim. Por exemplo, se eu tiver um botão que pode ser verde ou vermelho eu precisaria criar um componente \`botaoVerm\` e \`botaoVerde\`? Seria uma trabalheira desnecessária e eu ia acabar desistindo de criar uma peça pra isso, ia criar cada um do zero cada vez que fosse usar... É aí que entram as _props_!

As _props_ são, como você imaginaria, **propriedades que você passa pros seus componentes** pra ele alterar sua forma ou funcionalidade de acordo. Isso te permite, no exemplo acima, passar uma _prop_ \`color = "red"\` pro seu botão pra que ele fique vermelho, e usar o verde como cor padrão.

![Exemplo de props com botões](/media/exemplo-react-button-props.jpg)

Esse exemplo acima, por mais simples que seja, é um bom indicativo do poder dos componentes que recebem _props_: eles podem **se adaptar aos dados passados pra eles** e serem super flexíveis, tornando tudo ainda mais reutilizável e modular! Ah, e vale notar que o texto no interior do botão, entre \`<Button>\` (abertura de um componente) e \`</Button>\` (e fechamento do mesmo), é, por si só, uma _prop_! O \`Button\` se adapta a esta propriedade colocando ela como texto do interior do botão ;)

### _State_

Se você já entendeu qual é a vibe da _prop_, então o _state_ (estado) vai ser facinho: se por um lado as _props_ vem de fora - quem chama o \`Button\` que define o seu texto e \`color\`, por exemplo - o _state_ é definido **dentro do próprio componente**. Seria como o botão tivesse uma propriedade \`foiClicado\` que fosse interna a ele e só ele controla - meu botão, minhas regras!

Componentes do tipo _stateful_ (que têm _state_) podem ter **métodos que modificam ou interagem com o _state_**, e isso permite uma série de funcionalidades que vão desde controlar em qual ponto da animação um vetor se encontra, até se o usuário está logado e quais são seus dados em um painel administrativo complexo.

![Vídeo da animação da árvore do site da Novida](/media/selleta-depoimento-1.JPG)

Na animação acima (do [site da Novida](https://novida.netlify.com)), o componente dessa primeira seção (\`FirstSection\`) tem um _state_ \`shouldStart\`, que começa como \`false\` e, assim que o site carrega, é atualizado pra \`true\`, fazendo com que o fundo fique azul (ao invés de branco) e permitindo que o componente da árvore apareça. Esse componente da árvore tem um estado que diz em qual parte da árvore a animação está no momento, terminando na etapa em que ela tá 100% crescida.

É interessante notar que as _props_ de um componente podem ser definidas por um _state_ do componente que contém ele (componente "pai"). Por exemplo, os textos "Plante a semente" e "A Novida cuida do resto" recebem _props_ que definem se deveriam aparecer ou não, e elas são passadas pelo \`FirstSection\` que tem outros 2 estados além do \`shouldStart\`: \`showSubtitle\` e \`showTitle\`.

Seguindo essa lógica, a gente chega a um padrão bem comum em aplicativos e sites de React: existe um componente que engloba todo o projeto e que contém um estado gigante, com todas as informações mutáveis da aplicação. Esse componente "raíz" (não, ele não é rasta haha) então repassa partes desse estado pra cada componente "filho", segundo necessário. Assim, a gente consegue fazer com que a informação de um usuário logado seja acessada no cabeçalho, pra mostrar o nome e avatar, no painel do usuário, pra mostrar outras informações e permitir a edição, e num campo de texto de um fórum pra marcar quem tá enviando a nova mensagem, por exemplo.

![Exemplo do Slack, que usa React](/media/exemplo-react-state-slack.JPG)

Como exemplo, temos o Slack, que é construído em React: a mesma informação - o meu nome de usuário e informações de contato - é armazenada no _state_ do aplicativo todo, em um diretório central que espalha esses dados pra barra lateral, pra caixa de mensagens e pras informações do perfil, por exemplo.

### Sumarizando

O React preconiza a modularidade do código, com a criação de componentes que interagem entre si - podendo conter e estar contidos em outros - e que podem ser reutilizados. Esses componentes podem passar _props_ uns para os outros e/ou ter _states_ próprios, os quais eles podem controlar e usar para buscar dados, dispôr informações, reagir à interação do usuário, controlar animações, etc. O React, então, como o próprio nome da bilbioteca sugere, **_reage_ a mudanças no estado** e nas propriedades **e _renderiza_ novamente** (pinta na tela) **a interface**. Fim!

::: tip Nota
Na Kaordica, pra criar **sites mais rápidos e amigáveis pra SEO** (posicionamento no Google), usamos uma biblioteca construída em cima do React, chamada [Gatsby](https://gatsbyjs.org). Essa biblioteca basicamente roda todo o React no servidor e "constrói" os arquivos prontinhos do site pro usuário poder acessar mais rápido e pros mecanismos de busca poderem interpretar o conteúdo das páginas mais facilmente. Se usássemos só o React, o browser do usuário teria que baixar todo o site, interpretar os arquivos de _javascript_, puxar o conteúdo do site da ferramenta em que fazemos a edição e, só então, ver o resultado final.
:::

## O que isso implica pra você como designer

Você não precisa saber como o React faz isso, ou mesmo quais são as possibilidades dele pra sites e aplicativos, mas **você precisa entender a dinâmica componentes <> props <> state**. Essa dinâmica baliza toda a forma com que pensamos na estrutura do site, nos dados (conteúdo) e nas variações dos diferentes componentes visuais - e, claro, no desenvolvimento do código em si.

Já temos uma coleção incipiente de componentes de React que reutilizamos pra todos os projetos, como, por exemplo, o componente que dita as informações de SEO de uma página, mas se você internalizar esse jeito de pensar, pode contribuir pra expansão dessa coleção e até mesmo pra criação de uma para o Figma!

Imagina se tivéssemos peças prontas pra encaixar em esqueletos ou quase prontas pra usar nos designs visuais, só sendo necessário ajustar pra marca do cliente? Seria muito trampo salvo tanto no design quanto no desenvolvimento :smile:

### Exemplo prático: cartão de depoimento da Selleta

Vamos pegar o exemplo do cartão de depoimento que criamos pro site da Selleta. O design visual abaixo é o que recebi pra desenvolver... por mais que seja LINDO (boa, Zé!), ele tem alguns problemas, que vamos discutir sob a luz do que você aprendeu sobre o React.

![Cartão da Selleta](/media/selleta-depoimento-1.JPG)

Existem 2 questões principais com esse design:

- Não podemos garantir a qualidade, orientação ou foco das fotos que vão ser inseridas da pessoa, o que deixa esse esquema de fazer uma máscara com o formato do logo muito _frágil_: pode ser que a foto seja uma bosta e o foco dela esteja fora da máscara, e aí visitantes não vão nem conseguir entender o que que tá rolando. Na dúvida, quando for usar fotos no design, use imagens merda e vê se elas funcionam também :wink:
- Um depoimento é algo médio difícil de conseguir, e muitas vezes as informações dele vão estar incompletas ou num formato não esperado... As _props_ desse componente, portanto, não são muito previsíveis:
  - A pessoa pode não concordar em ter a foto dela ali;
  - O corpo do texto pode ser GIGANTE - depoimentos com mais de 1 parágrafo não são incomuns;
  - Precisamos prover os ícones pros clientes escolherem, isso representa um tempinho bão escolhendo ícones e formatando eles, ou então deixando isso na mão dos clientes, o que costuma dar em resultados horrorosos;
  - O título da pessoa pode ser algo longo demais pra caber nesse cartão - tudo bem que "Aluno de projetos arquitetônicos" é razoavelmente longo, mas "Coordenador do projeto 'Casa para todos' da UFMT" é maior :stuck_out_tongue_closed_eyes:.

Se eu fosse reproduzir esse design cegamente, podia chegar na seguinte situação:

![Cartão da Selleta](/media/selleta-depoimento-2.JPG)

O resultado não é catastrófico, mas a imagem do prédio ficou fora do foco, o cartão ficou muito maior que o outro e o ícone se manteve, deixando tudo um pouco repetitivo... Claro que podemos limitar o número de caracteres no editor de conteúdo, fazer uma lista de ícones bem completa pra escolherem e tentar definir com CSS um jeito de cortar a imagem direitinho... mas, no mínimo, não é trivial, pra quem tá desenvolvendo, como lidar com cada uma dessas questões. Essa falha na comunicação **gasta tempo e prejudica o resultado final**.

E se, por exemplo, o cartão de depoimento não tivesse foto? Qual das opções abaixo a pessoa desenvolvendo deveria aderir?

![Cartão da Selleta](/media/selleta-depoimento-3.JPG)

Ambas as soluções são rápidas de implementar, o problema não é o código... mas elas têm implicações diferentes. Enquanto desenvolvendo, prefiro não atrapalhar quem fez o design visual perguntando coisas tão "pequenas", mas conforme crescemos a importância dos nossos projetos e nos posicionamos como uma agência de qualidade, **precisamos cada vez mais nos atentar a essas coisas pequenas**!

Por isso, da próxima vez que for fazer o esqueleto e design visual de um site/aplicativo, pense pragmaticamente sobre as _props_ que cada componente precisa e comece a cercar todos os cenários possíveis. Vai ser um trampinho, mas o resultado vai valer a pena ;)

![Cartão da Selleta](/media/selleta-depoimento-4.JPG)

**Meu sonho encontrar isso aqui num design**, um dia! Se você quer me ajudar com isso, leia o próximo guia sobre [como trabalhar com componentes no Figma](/design/componentes-figma.html) :smile:
`;

// export default defaultMarkdown;
