---
sidebar_position: 2
---

# Modelo de Domínio

## Padrão de Modelo de Domínio

O **padrão de modelo de domínio** tem como objetivo representar as regras e comportamentos do negócio de forma estruturada e coesa. Nesse padrão, a modelagem de objetos incorpora tanto o **estado** (dados) quanto o **comportamento** (regras de negócio), com foco exclusivo nas **complexidades do domínio**, e não em aspectos técnicos como persistência ou transporte.

> ⚠️ O padrão de modelo de domínio deve ser utilizado quando a lógica de negócio é complexa o suficiente para justificar uma estrutura rica e expressiva.

A modelagem deve ser construída sobre a **Linguagem Ubíqua**, ou seja, os termos usados por desenvolvedores e especialistas de domínio devem estar refletidos diretamente no código.

As principais ferramentas táticas do modelo de domínio são:

- **Objeto de Valor**
- **Entidades**
- **Agregados**
- **Eventos de Domínio**
- **Serviços de Domínio**

---

## Objeto de Valor

Um **Objeto de Valor (Value Object)** representa conceitos que são **imutáveis**, definidos **por seus atributos** e **sem identidade própria**. Eles expressam atributos ricos do domínio e podem conter **lógica de validação** ou **comportamentos derivados**.

### Características:

- Imutável
- Sem identidade
- Definido apenas pelos seus valores
- Pode conter comportamentos e validações

### Exemplo em Java

```java
public record Cpf(String numero) {
    public Cpf {
        if (!numero.matches("\d{11}")) {
            throw new IllegalArgumentException("CPF inválido");
        }
    }

    public String formatado() {
        return numero.replaceAll("(\d{3})(\d{3})(\d{3})(\d{2})", "$1.$2.$3-$4");
    }
}
```

---

## Entidade

Uma **Entidade** é um objeto que possui uma **identidade única e imutável** ao longo do tempo, mesmo que seus atributos mudem. Ela é mutável e frequentemente atua como **Raiz de um Agregado**.

### Características:

- Possui um identificador único
- Os atributos podem mudar com o tempo
- Relevante quando o ciclo de vida é importante para o negócio

### Exemplo em Java

```java
public class Cliente {
    private final UUID id;
    private String nome;
    private Cpf cpf;

    public Cliente(UUID id, String nome, Cpf cpf) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }

    public UUID getId() {
        return id;
    }

    public void alterarNome(String novoNome) {
        this.nome = novoNome;
    }

    public String getNome() {
        return nome;
    }

    public Cpf getCpf() {
        return cpf;
    }
}
```

---

## Agregado

Um **Agregado** é uma **estrutura de consistência transacional** composta por uma **entidade raiz** (Aggregate Root) e outros objetos subordinados — entidades internas ou objetos de valor. Toda modificação de estado no agregado deve respeitar as **regras de negócio**, e apenas a raiz pode expor métodos públicos.

### Características:

- Garante integridade do modelo
- Limita a consistência a um único ponto
- Toda operação deve ocorrer via a raiz do agregado
- Atua como **limite transacional atômico**

> Somente dados **fortemente consistentes** devem residir dentro do limite de um agregado.

### Exemplo em Java

```java
public class Pedido {
    private final UUID id;
    private final List<ItemPedido> itens = new ArrayList<>();
    private boolean finalizado = false;

    public Pedido(UUID id) {
        this.id = id;
    }

    public void adicionarItem(String produto, int quantidade) {
        if (finalizado) {
            throw new IllegalStateException("Pedido já finalizado.");
        }
        itens.add(new ItemPedido(produto, quantidade));
    }

    public void finalizar() {
        if (itens.isEmpty()) {
            throw new IllegalStateException("Pedido sem itens.");
        }
        this.finalizado = true;
        // Emitir evento de domínio
    }

    public UUID getId() {
        return id;
    }

    public List<ItemPedido> getItens() {
        return List.copyOf(itens);
    }
}
```

---

## Eventos de Domínio

**Eventos de Domínio** são **mensagens imutáveis** que representam algo que **já aconteceu** no domínio de negócio. Eles descrevem **mudanças de estado** importantes, com impacto relevante para o negócio, e podem ser usados para notificar outros sistemas ou contextos.

### Características:

- Nomeados no passado (ex: `PedidoFinalizado`)
- Representam uma mudança de estado
- Fazem parte da interface pública do agregado
- Carregam todos os dados relevantes para o evento

### Exemplo em Java

```java
public record PedidoFinalizadoEvent(UUID pedidoId, LocalDateTime dataFinalizacao) {}
```

---

## Serviço de Domínio

**Serviços de Domínio** são classes **sem estado** que encapsulam lógica de negócio que:

- **Não pertence naturalmente a nenhuma entidade ou objeto de valor**
- **É utilizada por múltiplos agregados**
- **Orquestra múltiplos agregados**

### Características:

- Stateless
- Possui regras de negócio reutilizáveis
- Facilita a separação de responsabilidades

### Exemplo em Java

```java
public class GeradorFaturaService {

    public Fatura gerarFatura(Cliente cliente, List<Pedido> pedidos) {
        BigDecimal total = pedidos.stream()
            .map(Pedido::getTotal)
            .reduce(BigDecimal.ZERO, BigDecimal::add);

        return new Fatura(cliente.getId(), total, LocalDate.now());
    }
}
```

---

## Quando usar o Modelo de Domínio

O padrão de modelo de domínio é recomendado quando:

- O domínio de negócio é **complexo**
- Há muitas **regras, exceções e variações**
- Existe **ambiguidade na linguagem do negócio**
- A modelagem facilita o **alinhamento entre times de negócio e tecnologia**

> Quando o domínio é simples e baseado em CRUDs, considere arquiteturas mais diretas, como [Transaction Script](/docs/arquitetura/logica-simples/transaction-script) ou [Active Record](/docs/arquitetura/logica-simples/active-record).
