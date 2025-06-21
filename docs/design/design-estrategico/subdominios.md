---
sidebar_position: 2
---

# Subdomínios

No **Domain-Driven Design (DDD)**, o termo **subdomínio** representa uma parte específica do domínio de negócio da empresa. Cada subdomínio agrupa um conjunto de responsabilidades, processos e regras relacionadas, permitindo que a organização e o time técnico compreendam melhor a estrutura e a complexidade do negócio como um todo.

## Mapeando Subdomínios

Antes de tudo, precisamos identificar quais são as atividades ou funções comerciais da empresa. Essas atividades são chamadas de **subdomínios**, e representam os **limites lógicos** das áreas funcionais dentro da organização.

Uma empresa geralmente possui **vários subdomínios**, que juntos compõem o **domínio de negócio** completo. Compreender esses subdomínios é essencial para definir estratégias, delimitar responsabilidades e aplicar o design adequado à solução de software.

No DDD, classificamos os subdomínios em três tipos principais:

- **Principal (Core Domain)**
- **Genérico (Generic Subdomain)**
- **Suporte (Supporting Subdomain)**

> ⚠️ É importante notar que um subdomínio pode **mudar de categoria ao longo do tempo**, de acordo com as estratégias e necessidades do negócio.

### Subdomínio Principal

Os subdomínios principais representam as **funções essenciais e estratégicas** da empresa — o chamado **core business**. São responsáveis por gerar lucro e diferenciar a empresa no mercado.

- Não podem ser terceirizados ou substituídos por soluções prontas.
- Costumam ser **complexos**, exigindo alta especialização para serem implementados e mantidos.
- Nem sempre são exclusivamente técnicos: por exemplo, para uma empresa que fabrica diferentes tipos de pães e bolos, o processo de criação e diferenciação dos produtos pode ser considerado parte do subdomínio principal.

> Toda atividade que representa o **diferencial competitivo** da empresa deve ser tratada como **subdomínio principal**.

### Subdomínio Genérico

Os subdomínios genéricos também são essenciais para o funcionamento da empresa, mas **não fazem parte do core business**. Como não geram vantagem competitiva direta, podem ser atendidos por:

- Soluções prontas do mercado (open source ou comerciais);
- Ferramentas amplamente utilizadas e validadas;
- Serviços terceirizados.

Apesar de **podem ser complexos**, esses subdomínios não precisam de uma implementação customizada e não trazem valor competitivo direto.

> Exemplo: autenticação de usuários, envio de e-mails, emissão de nota fiscal eletrônica.

### Subdomínio de Suporte

Os subdomínios de suporte são atividades **não essenciais para a lucratividade**, mas que **auxiliam as demais funções** na execução da solução.

- São geralmente **simples de implementar** e manter;
- Não fazem parte do core business;
- São importantes para o funcionamento do negócio, mas não contribuem diretamente para a geração de receita ou diferencial de mercado.

> Exemplo: sistema de controle de acesso físico à sede da empresa, ferramentas internas de RH.

## Especialistas de Domínio

Para uma correta identificação dos subdomínios, é essencial compreender profundamente a **estratégia de negócio** da organização — seus objetivos, concorrentes, clientes e serviços ofertados.

Nesse processo, devemos contar com o apoio dos **especialistas de domínio** (também chamados de _Domain Experts_), que são pessoas da área de negócio ou produto. Eles:

- Têm conhecimento profundo sobre o funcionamento da empresa;
- Representam a autoridade nos assuntos do domínio;
- Podem ser **generalistas** ou **especialistas** em áreas específicas.

> ⚠️ Os especialistas de domínio **não são analistas de requisitos** nem desenvolvedores. Eles não definem soluções técnicas, mas **descrevem os problemas e regras de negócio** com profundidade.

A aproximação com esses profissionais é fundamental para construir uma **linguagem universal**, facilitar a comunicação entre áreas e garantir que a solução desenvolvida esteja de acordo com a realidade do negócio.

> Mais adiante, falaremos sobre essa linguagem comum: a **Linguagem Ubíqua**.