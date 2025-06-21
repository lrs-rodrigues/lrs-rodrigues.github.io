---
sidebar_position: 5
---

# Event Storming

## História do Event Storming

O **Event Storming** foi criado por **Alberto Brandolini** em 2013 como uma forma interativa e colaborativa de modelar domínios complexos. Brandolini observou que muitas sessões tradicionais de análise de requisitos e modelagem eram ineficazes, engessadas e pouco inclusivas. 

Inspirado por conceitos do **Domain-Driven Design (DDD)** de Eric Evans e das dinâmicas de brainstorming, ele desenvolveu o Event Storming como uma forma de envolver diversos stakeholders (desenvolvedores, analistas, usuários de negócio, designers e arquitetos) em uma única sessão visual e tangível.

O objetivo principal era simples: permitir que as **conversas certas** acontecessem entre as pessoas certas, de forma rápida e fluida, utilizando **eventos de domínio** como base para a discussão.

---

## O que é Event Storming?

**Event Storming** é uma técnica de modelagem colaborativa de baixo custo tecnológico usada para explorar, entender e representar o **domínio de negócio**. Utiliza post-its coloridos em um quadro (físico ou virtual) para criar uma **linha do tempo de eventos** e construir uma **visão compartilhada** entre os participantes sobre como os processos ocorrem.

É especialmente útil em processos de descoberta de requisitos, mapeamento de processos e identificação de **limites de contexto** dentro de sistemas complexos.

> 🧠 O nome é uma combinação de "Event" (Evento de Domínio) e "Brainstorming".

---

## Etapas do Event Storming

### 1) Exploração Desestruturada

Inicia-se com um brainstorming livre dos **eventos de domínio**, representando algo que **já aconteceu** no passado.

- Representados com **post-its laranja**.
- Exemplo: `Pedido Realizado`, `Pagamento Confirmado`, `Entrega Agendada`.

O objetivo é capturar o máximo de eventos relevantes ao processo de negócio, sem se preocupar inicialmente com a ordem ou estrutura.

---

### 2) Linhas do Tempo

Agora, organizamos os eventos em uma **linha do tempo**, buscando o **"caminho feliz"** (fluxo ideal) e depois os cenários alternativos ou exceções.

- Representamos caminhos alternativos com **ramificações e setas**.
- Alterações nos eventos podem ser feitas durante essa organização.

---

### 3) Pontos Problemáticos

Identificamos os **problemas**, dúvidas ou gargalos no processo.

- Usamos **post-its rosa girados (na vertical)**, posicionados acima dos eventos problemáticos.
- Exemplo: "Processo de aprovação manual demora demais".

---

### 4) Eventos Cruciais

Detectamos os eventos **comercialmente significativos**, que representam uma virada importante no processo.

- Representamos com **barras verticais** no fluxo.
- Exemplo: `Pagamento Aprovado` pode indicar a separação entre pedido e logística.

---

### 5) Comandos

Comandos representam **ações que disparam os eventos**.

- Formulados no **imperativo**, ex: `Realizar Pedido`, `Confirmar Pagamento`.
- Representados com **post-its azul-claro**, colocados **antes** do evento que produzem.
- Quando disparado por uma pessoa, adicionamos um pequeno post-it indicando o **ator**.

---

### 6) Políticas

As **políticas** descrevem reações automáticas a eventos, que disparam comandos de forma indireta.

- Exemplo: após `Pagamento Confirmado`, o sistema executa `Agendar Entrega`.
- Representadas com **post-its lilás**, conectando evento e comando.

---

### 7) Modelos de Leitura

Representam **consultas**, visualizações ou relatórios usados como apoio à decisão.

- Exemplo: `Listagem de Pedidos Pendentes`, `Notificação de Entrega`.
- Representados com **post-its verdes**, posicionados **antes dos comandos**.

---

### 8) Sistemas Externos

Identificamos **integrações externas** ao domínio sendo modelado.

- Exemplo: Gateway de pagamento, API de frete.
- Representados com **post-its rosa (na horizontal, não girados)**.

---

### 9) Agregados

Organizamos os eventos e comandos sob **Agregados**, que encapsulam consistência e regras de negócio.

- Representados com **post-its amarelos grandes**.
- À esquerda os comandos, à direita os eventos.

---

### 10) Contextos Delimitados

Agrupamos os elementos (eventos, comandos e agregados) por **limites de contexto lógico** ou de negócio.

- Cada agrupamento forma um **Bounded Context** do DDD.
- Nem sempre será necessário aplicar o modelo orientado a eventos após o workshop.

---

## Exemplo Prático: Compra em um E-commerce

Vamos modelar o fluxo de uma **compra em um e-commerce** utilizando as etapas do Event Storming:

1. **Exploração Desestruturada**  
   - Eventos: `Carrinho Criado`, `Item Adicionado`, `Pedido Realizado`, `Pagamento Confirmado`, `Pedido Enviado`.

2. **Linhas de Tempo**  
   - Ordem: `Carrinho Criado` → `Item Adicionado` → `Pedido Realizado` → `Pagamento Confirmado` → `Pedido Enviado`.

3. **Pontos Problemáticos**  
   - Acima de `Pagamento Confirmado`: “Falha de pagamento frequente em boleto”.

4. **Eventos Cruciais**  
   - `Pagamento Confirmado` → divide o fluxo de compra e entrega.

5. **Comandos**  
   - `Adicionar Item`, `Fechar Pedido`, `Processar Pagamento`, `Agendar Entrega`.

6. **Políticas**  
   - `Pagamento Confirmado` → executa `Agendar Entrega` (automático).

7. **Modelo de Leitura**  
   - `Resumo do Carrinho`, `Histórico de Compras`.

8. **Sistemas Externos**  
   - `Gateway de Pagamento`, `Transportadora`.

9. **Agregados**  
   - Agregado `Pedido`:  
     - Comandos: `Fechar Pedido`, `Cancelar Pedido`  
     - Eventos: `Pedido Realizado`, `Pedido Cancelado`

10. **Contextos Delimitados**  
    - Contexto `Checkout` (carrinho, pedido, pagamento)  
    - Contexto `Logística` (entrega, rastreio)

---

## Benefícios do Event Storming

- Construir uma **linguagem ubíqua** entre técnicos e negócio.
- Modelar de forma visual o **processo de negócio**.
- Explorar novos **requisitos e melhorias**.
- Facilitar o **onboarding** de novos membros da equipe.
- Aumentar a **compreensão coletiva** do domínio.
- Antecipar e mitigar **gargalos e falhas** no processo.

---

> 🧩 Após o Event Storming, é possível derivar modelos táticos como **Agregados, Eventos de Domínio, Serviços de Domínio e Bounded Contexts**, fortalecendo a aplicação do Domain-Driven Design.
