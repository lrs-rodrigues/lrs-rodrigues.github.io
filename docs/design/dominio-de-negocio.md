---
sidebar_position: 2
---

# Domínio de Negócio

Antes de nos aprofundarmos no **Domain-Driven Design (DDD)**, é fundamental compreender o que é um **domínio de negócio**.

O **domínio** representa a **principal área de atuação de uma empresa**, ou seja, o conjunto de **atividades, processos e regras** que definem os serviços ofertados aos clientes. Em outras palavras, é **o problema central que a organização está tentando resolver** com o uso de software.

Uma empresa pode ter **um ou vários domínios de negócio**, e esses domínios podem **evoluir ou mudar ao longo do tempo**, de acordo com os objetivos estratégicos e com as necessidades do mercado.

### Exemplos de domínios de negócio:

- **Banco Itaú**: soluções financeiras e serviços bancários;
- **iFood**: serviços de delivery e logística;
- **Mercado Livre**: marketplace, pagamentos digitais, logística e serviços financeiros;
- **Netflix**: serviços de streaming de filmes e séries.

> ⚠️ O domínio é o **contexto** em que os problemas e oportunidades estão inseridos. Compreendê-lo é o primeiro passo para criar soluções eficazes.

## A Volatilidade do Mercado

Com a constante **volatilidade e dinamismo do mercado**, precisamos preparar nossos sistemas para lidar com mudanças rápidas nos modelos de negócio.

É nesse cenário que entra o **Domain-Driven Design (DDD)** — também chamado de **Modelagem de Domínio** — como uma abordagem para orientar decisões de design de software **baseadas no domínio de negócio**.

> O DDD não é uma metodologia organizacional, mas sim uma **caixa de ferramentas conceituais e técnicas** que nos ajuda a alinhar software com os objetivos do negócio.

O principal foco do DDD é a criação de uma **linguagem ubíqua** (ou linguagem universal), permitindo que especialistas de domínio e desenvolvedores compartilhem um **entendimento comum sobre o problema** e falem a mesma linguagem, superando barreiras técnicas.

## O que é "Design"?

A palavra **design**, em inglês, significa **projetar**. No contexto do Domain-Driven Design, estamos falando sobre **projetar sistemas orientados ao domínio do negócio**.

A modelagem de domínio, portanto, trata da estruturação e organização do conhecimento do negócio, para que possamos traduzi-lo em soluções técnicas eficazes.

O DDD é dividido em duas grandes frentes:

### 1. Design Estratégico

Foca no entendimento **do que** e **por que** estamos construindo determinada solução. Ele nos ajuda a:

- Identificar os **subdomínios** e suas responsabilidades;
- Delimitar **Bounded Contexts**;
- Tomar decisões sobre a **arquitetura de alto nível** do sistema.

Essa etapa é essencial para garantir que estamos resolvendo **os problemas certos**, alinhados com as **prioridades do negócio**.

### 2. Design Tático

Foca em **como** implementamos a solução. Ele nos oferece padrões e práticas para:

- Representar entidades, agregados e repositórios;
- Aplicar lógica de domínio com clareza;
- Modelar regras de negócio de forma expressiva e testável.

> 📌 Vale lembrar: **todo software é uma tentativa de resolver um problema**. A modelagem de domínio é a forma como **traduzimos esse problema em código**.

---

Compreender profundamente o **domínio de negócio** é a base para a construção de soluções de software **relevantes, eficazes e evolutivas**. O Domain-Driven Design nos capacita a fazer essa ponte entre **conhecimento do negócio** e **implementação técnica**, com foco em resolver o que realmente importa.
