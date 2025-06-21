---
sidebar_position: 4
---

# Contexto Delimitado

## Introdução

Os **Contextos Delimitados** (Bounded Contexts) definem o escopo de aplicação da **Linguagem Ubíqua** e do **modelo de domínio** que ela representa. Em outras palavras, são os limites consistentes onde uma linguagem comum é válida e compreendida por todos os envolvidos — representando também os limites físicos da solução.

> A Linguagem Ubíqua só é verdadeiramente "ubíqua" dentro do seu contexto delimitado.

Para modelar o domínio de negócio de forma eficaz, precisamos **dividir o modelo** em partes menores e definir claramente o contexto de aplicabilidade para cada linguagem identificada, garantindo a **consistência interna** e evitando ambiguidades.

Os contextos podem ser grandes ou pequenos, dependendo do foco estratégico do negócio, mas o fundamental é que o modelo dentro de cada contexto seja **útil, claro e alinhado** com as necessidades específicas daquela parte do negócio.

#### Exemplo prático

Imagine uma plataforma de comércio eletrônico que envolve:

- **Catálogo de Produtos** (exibição, categorias, atributos);
- **Processamento de Pedidos** (carrinho, pagamento, faturamento);
- **Gestão de Estoque** (controle de inventário, reposição).

Cada uma dessas áreas pode ser um **contexto delimitado** diferente, com sua própria Linguagem Ubíqua e modelo de dados. Por exemplo, o termo "Produto" no contexto do catálogo pode ter atributos focados em descrição e marketing, enquanto no contexto de estoque, o foco será quantidade disponível e localização física.

> Os **Contextos Delimitados** ajudam a evitar conflitos na interpretação dos termos e na lógica de negócio.

---

## Diferenças entre Subdomínios e Contextos Delimitados

Embora estejam relacionados, **subdomínios** e **contextos delimitados** não são a mesma coisa.

- **Subdomínios** são descobertos durante o processo de exploração com os especialistas de domínio, representando os **limites lógicos e estratégicos das atividades da organização**.  
  São a decomposição do domínio de negócio em áreas de responsabilidade, como Core, Suporte e Genérico.

- **Contextos Delimitados** são definidos durante a fase de design do sistema.  
  São os **limites de modelo, físicos e de propriedade** da solução, baseados nos subdomínios e na Linguagem Ubíqua, e indicam como o software deve ser organizado para representar e resolver problemas de negócio.

### Três tipos de limites para Contextos Delimitados

- **Limite do Modelo**: Define até onde vai a validade da Linguagem Ubíqua e do modelo dentro do contexto.

- **Limite Físico**: Indica como o contexto será implementado — geralmente como um serviço, aplicação ou módulo isolado.

- **Limite de Propriedade**: Define a equipe responsável pelo contexto. Uma equipe deve ser proprietária de um contexto, mas pode atuar em vários contextos.

> ⚠️ Um contexto delimitado pode conter múltiplos subdomínios, especialmente quando esses subdomínios estão fortemente relacionados ou integrados.

#### Exemplo para diferenciar

Em uma empresa de seguros:

- O **subdomínio** “Gestão de Apólices” é uma área lógica importante do negócio.
- O **contexto delimitado** “Contrato” pode englobar parte da gestão de apólices e de cobertura, com regras e terminologia específicas.
- Já outro contexto delimitado pode ser “Faturamento”, mesmo que relacionado ao mesmo subdomínio, pois tem uma linguagem e regras distintas.

---

## Contextos Delimitados e Microserviços

Um tema que gera muita dúvida é a relação entre **contextos delimitados** e **microserviços**.

> 📌 **Todo microserviço que implementa corretamente um contexto delimitado tende a ser um "bom monolito"** — ou seja, um serviço coeso, com responsabilidade única e bem definida.

Porém, **não devemos confundir um contexto delimitado com um microserviço**. O conceito de contexto delimitado é **estratégico e conceitual**, enquanto o microserviço é uma **unidade de implementação e implantação técnica**.

- Um **microserviço** pode implementar um contexto delimitado inteiro;
- Ou pode implementar apenas **parte** de um contexto delimitado, especialmente em sistemas muito complexos;
- Um contexto delimitado pode também ser implementado por **mais de um microserviço**, dependendo da estratégia e das necessidades técnicas.

#### Exemplo prático

Suponha um contexto delimitado chamado **"Pedidos"** que cobre toda a lógica para gerenciar pedidos, desde a criação até o faturamento.

- Em uma arquitetura simples, um único microserviço poderia implementar todo o contexto, contendo a lógica de domínio e persistência.
- Em uma arquitetura mais fragmentada, poderíamos ter microserviços separados para **“Criação de Pedidos”**, **“Processamento de Pagamentos”** e **“Faturamento”**, todos pertencentes ao mesmo contexto delimitado, mas divididos para facilitar escalabilidade e manutenção.

### Por que essa distinção importa?

- **Contextos delimitados** ajudam a organizar o conhecimento do negócio e a comunicação entre times.
- **Microserviços** são decisões arquiteturais que envolvem infraestrutura, deploy e escalabilidade.

Confundir os dois pode levar a um design ruim, com microserviços que não respeitam a coesão do domínio ou contextos que ficam muito vagos para implementação técnica.

## Integração entre Contextos Delimitados

O **Contexto Delimitado** não apenas protege a consistência da **Linguagem Ubíqua**, como também facilita a modelagem modular e alinhada ao negócio. O propósito de um modelo dentro de um contexto é **estabelecer fronteiras claras** entre linguagens e suas respectivas responsabilidades.

Essas fronteiras criam os chamados **pontos de contato** entre contextos distintos — locais onde a comunicação e a integração entre os modelos ocorrem.

> Esses pontos de contato são formalizados como **contratos**.

Para que esses contratos funcionem corretamente e evitem acoplamento indesejado, as equipes envolvidas devem escolher um modelo de colaboração. Existem duas formas principais de colaboração entre contextos:

- **Cooperação (Partnership)**
- **Cliente-Fornecedor (Customer/Supplier)**

---

### Cooperação (Partnership)

Nesse modelo, as equipes colaboram ativamente para criar e manter os contratos de integração. Essa abordagem exige **comunicação frequente, alinhamento de prazos e comprometimento mútuo**.

#### Formas de Cooperação:

- **Parceira (Partnered)**:  
  As equipes mantêm um canal de comunicação aberto. Quando uma equipe precisa fazer uma mudança, ela notifica a outra, e ambas colaboram na evolução do contrato.

  **Exemplo:**  
  Os times de **Catálogo** e **Recomendações** decidem evoluir juntos o modelo de "Produto" para incluir novos atributos que influenciam as sugestões personalizadas.

- **Compartilhado (Shared Kernel)**:  
  As equipes compartilham uma **parte comum do modelo** (kernel), mantendo-a em um módulo comum, versionado e de responsabilidade conjunta. Cada equipe mantém seu próprio domínio lógico, mas o modelo compartilhado serve como base para integração.

  **Exemplo:**  
  As equipes de **Faturamento** e **Contabilidade** compartilham o mesmo modelo de "Nota Fiscal", mas cada uma aplica suas regras específicas em seus contextos privados.

---

### Cliente-Fornecedor (Customer/Supplier)

Nesse modelo, existe uma relação **hierárquica** entre os contextos:

- O contexto **Fornecedor (ascendente)** é responsável por prover os dados ou serviços.
- O contexto **Cliente (descendente)** consome as informações disponibilizadas.

Essa hierarquia pode assumir diferentes formas de controle sobre o contrato de integração:

#### Tipos de Colaboração:

- **Conformismo (Conformist)**:  
  O fornecedor define o contrato unilateralmente. O cliente deve se adaptar sem influência sobre o formato.  

  **Exemplo:**  
  A equipe de **Financeiro** disponibiliza relatórios em um formato fixo, e o time de **Análise de Dados** precisa adaptar seu pipeline para consumir esses relatórios.

- **Camada Anticorrupção (Anti-Corruption Layer - ACL)**:  
  O cliente cria uma camada intermediária que traduz e adapta os dados do fornecedor para o seu próprio modelo. Essa camada **protege o modelo interno** da poluição ou dependência do modelo externo.

  **Exemplo:**  
  O sistema de **Marketing** consome dados de **Clientes** vindos do CRM, mas transforma esses dados através de uma ACL antes de integrá-los em sua própria base, com termos e regras próprias.

- **Serviço Host Aberto (Open Host Service)**:  
  O fornecedor oferece **interfaces públicas e flexíveis** que permitem que diferentes clientes usem versões específicas dos contratos, possibilitando evolução independente.

  **Exemplo:**  
  O serviço de **Autenticação** disponibiliza APIs específicas com esquemas distintos para o aplicativo web, mobile e integrações com parceiros externos.

---

### Duplicando Serviços

Em algumas situações, a colaboração entre equipes é inviável devido a prioridades, atrasos ou visões diferentes. Nesses casos, uma equipe pode optar por **reimplementar o serviço do fornecedor dentro do seu próprio contexto**, criando uma versão local.

> ⚠️ Essa duplicação deve ocorrer apenas em **subdomínios genéricos ou de suporte**, **nunca em subdomínios principais (core business)**.

## Mapas de Contexto

O **Mapa de Contexto (Context Map)** é uma representação visual dos **contextos delimitados** existentes em um sistema e suas **relações de integração**. Ele ajuda a visualizar como os contextos se conectam, quais tipos de colaboração existem entre eles e quem é responsável por cada área.

> Ele deve ser introduzido desde o início do projeto e **constantemente atualizado** à medida que o sistema evolui.

### O que um Mapa de Contexto pode incluir

- Os nomes dos contextos (ex: Catálogo, Pedidos, Estoque, Entrega)
- O tipo de colaboração entre os contextos (Parceria, Conformismo, ACL, etc)
- A direção do fluxo de dados (quem consome e quem fornece)
- Os contratos estabelecidos
- As equipes responsáveis por cada contexto

### Benefícios dos Mapas de Contexto

- **Clareza organizacional** — Todos entendem seus limites de atuação
- **Facilidade de onboarding** — Novos membros compreendem rapidamente os módulos do sistema
- **Alinhamento estratégico** — Ajuda na priorização de esforços e decisões de arquitetura
- **Redução de conflitos** — Evita sobreposição de responsabilidades e ambiguidade

### Boas práticas

- Crie o mapa de forma colaborativa entre as equipes
- Atualize frequentemente conforme o sistema evolui
- Utilize ícones, cores ou notas para destacar responsabilidades e interações
