---
sidebar_position: 1
---

# Contexto

A história do **Domain-Driven Design (DDD)** é marcada por contribuições fundamentais para a forma como modelamos software orientado ao negócio. Seu surgimento veio da necessidade de enfrentar a crescente complexidade dos sistemas modernos, onde simplesmente escrever código funcional não era suficiente para garantir a sustentabilidade e a evolução de aplicações críticas ao negócio.

## A Origem com Eric Evans

O conceito de DDD foi introduzido por **Eric Evans**, em 2003, com o lançamento do livro:

📘 [Domain-Driven Design: Atacando as Complexidades no Coração do Software (Português)](https://www.amazon.com.br/Domain-Driven-Design-Atacando-Complexidades-Software/dp/8550800651)

> “Muitos projetos de software fracassam não por falhas técnicas, mas por falta de alinhamento entre o sistema e o domínio de negócio que ele deveria representar.” — *Eric Evans*

Nesse livro, Evans propôs uma abordagem onde a **modelagem do domínio** é o centro do desenvolvimento de software. A principal proposta era clara: **construir o software de forma fiel ao conhecimento e à linguagem do negócio**, mantendo um alinhamento constante entre **desenvolvedores** e **especialistas de domínio**.

### Principais conceitos introduzidos por Evans:

- **Ubiquitous Language (Linguagem Ubíqua)**: uma linguagem comum entre técnicos e especialistas;
- **Bounded Contexts (Contextos Delimitados)**: divisão clara entre modelos diferentes;
- **Entidades** e **Objetos de Valor**;
- **Agregados**;
- **Repositórios**;
- **Serviços de Domínio**.

Esses conceitos criaram uma base sólida para que o software fosse uma **representação precisa do negócio**, e não apenas uma estrutura técnica.

## A Consolidação com Martin Fowler

**Martin Fowler**, renomado arquiteto de software, também teve papel importante na **difusão e consolidação** do DDD. Ainda antes do livro de Evans, Fowler já promovia boas práticas de **design orientado a objetos** e modelagem centrada no domínio.

Após o lançamento da obra de Evans, Fowler se tornou um **grande entusiasta e divulgador do DDD**, conectando seus princípios com outras abordagens modernas:

- **Arquitetura Hexagonal (Ports and Adapters)**;
- **CQRS (Command Query Responsibility Segregation)**;
- **Event Sourcing**;
- **Microsserviços**, onde o conceito de **Bounded Context** se mostra essencial para evitar acoplamentos excessivos entre os serviços.

📘 [Padrões de Arquitetura de Aplicações Corporativas (Patterns of Enterprise Application Architecture - Português)](https://www.amazon.com.br/Padr%C3%B5es-Arquitetura-Aplica%C3%A7%C3%B5es-Corporativas-Martin-ebook/dp/B07FCPZ2R2/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IY7THEWN01PR&dib=eyJ2IjoiMSJ9.KweUYqg07Sap64Z1tPaR90ah4KqvDTF1wsxKDC9qDKdt1_SNVT8mzXa2EfjpvBfc9rS7a8ACCiyQm_a5_Xp_IH0VzgrRmDx9_dJ37xTYhAoqYmxkyh4z_3j4Y1IQAMpnwhzFnuTVvl3re8pJtnVbT230JxS4GJqk-EsSLzcq2KBZfQjN-ERXvVDPVr9vy5V0Dfb5z5do_ybbniHT7TTNrrscDeUe-1tDqcdL7XU09r4.a0RNAe70vM94lJfuoO1lZjWIxgsyAYa8UihSKy9iBNU&dib_tag=se&keywords=Patterns+of+Enterprise+Application+Architecture&qid=1750453971&s=books&sprefix=patterns+of+enterprise+application+architecture+%2Cstripbooks%2C198&sr=1-2)

A atuação de Fowler ajudou a trazer o DDD para o mundo real, mostrando como seus princípios poderiam ser aplicados a projetos ágeis, sistemas legados, e arquiteturas distribuídas modernas.

## Evolução e Relevância Atual

Desde seu surgimento, o DDD evoluiu e se consolidou como uma **abordagem estratégica e tática** para o desenvolvimento de sistemas complexos. Ele se destaca principalmente por:

- Focar na **compreensão do negócio** antes da solução técnica;
- Promover o **diálogo constante** entre times técnicos e de produto;
- Favorecer arquiteturas modulares, desacopladas e com **alta coesão**;
- Ser compatível com práticas modernas de desenvolvimento ágil, DevOps e microsserviços.

Hoje, o DDD é amplamente aplicado em empresas que buscam escalabilidade organizacional e técnica. Seus conceitos influenciam desde a modelagem de domínio até a arquitetura e o deploy dos sistemas.

## Outras Referências

Além dos livros de Evans e Fowler, há outras obras recomendadas para quem deseja aprender DDD em português:

📘 [Aprenda Domain-driven Design: Alinhando Arquitetura de Software e Estratégia de Negócios)](https://www.amazon.com.br/Aprenda-Domain-driven-Design-Arquitetura-Estrat%C3%A9gia/dp/8550819611/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.ENgZOozBax0HkiEitwwwKh5mPKMQi3TOkXm4Xx8GYRSsXsCbsMfggdUizB9H6frKuIJVBTkIssfFKmUZo3rGu9kshzMMK2GbimPn3BMRAQEXvycVT4LdtoE2pSJN_GBJ8XJxxCl1gjTyySnZ_6-STzvOZPWjkhumMMU4raZ87byYd2-pzVSQ-P_eLusCFqj-cVQSbgEhWKjc1FdFR9XgWoGP8xjfTzX_35aBgN3P84tcZk8BLqvM7k4FqStnrYa1VWpf6qyAkpc2jaENBZmVRYpXw_TKohWCkEViJbYdsFU.h0hfFo5It-9F8dTdgPMjPsGwsS0kWIuWcBmD2dyeDGU&qid=1750454040&sr=8-1)  
> Uma abordagem mais simples e direto sobre Domain-driven Design

📘 [Implementando Domain-Driven Design (Vaughn Vernon)](https://www.amazon.com.br/Implementando-Domain-Driven-design-Vernon/dp/8576089521/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=MWBDY10Z034K&dib=eyJ2IjoiMSJ9.lX6Gg8a7ZN3KxtkHxuahpF46_AOVaIsu8CF2HQM_WM57lflZSYVdVeph2J006uIEscGk7s7C71ZcDnYjJkf7358lXrp3fONgM7T_bU8ivSNf5m1aO0hPHmX7iX2yqkAYL4e0tfO9kDYSxJtFQsDhreg7YB5x65als8uBvXqCI1mCupi6ZTyt0c9PK-rC9Y7tLGvSJ9evrpt6D0vueo4vK7c-jI9xOaEcxgP353hGUtk.RdW41sjonNPXm6j3Pf0H-f8bE6sHPdQT7yZzI82d8Xc&dib_tag=se&keywords=Implementando+Domain-Driven+Design+%28Vaughn+Vernon%29&qid=1750454007&s=books&sprefix=implementando+domain-driven+design+vaughn+vernon+%2Cstripbooks%2C194&sr=1-1&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74)  
> Uma abordagem prática para aplicar os conceitos do DDD no dia a dia do desenvolvimento.

---

A sinergia entre **Eric Evans** e **Martin Fowler** — unindo **visão conceitual e aplicação prática** — ajudou o Domain-Driven Design a se tornar uma das abordagens mais respeitadas na engenharia de software moderna.
