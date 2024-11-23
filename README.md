# Sistema de Reserva de Assentos

Este projeto implementa uma interface para um sistema de reserva de assentos, como em um cinema. A aplicação é construída utilizando React e organiza componentes para exibir informações de filmes, um mapa de assentos, uma tela e um sistema de resumo para cálculo de valores.

---

## Estrutura do Projeto

A estrutura de arquivos do projeto está organizada conforme abaixo:

src/
├── components/
│   ├── MovieBox.jsx
│   ├── Seats.jsx
│   ├── SeatsContext.jsx
│   ├── Sum.jsx
│   ├── Screen.jsx
│   ├── Descriptor.jsx
│   ├── TextBox.jsx
├── styles/
│   ├── page.module.css
│   ├── seats.module.css
│   ├── sum.module.css
│   └── ...
└── data/
    └── data.JSON


- **`components`**: Contém os componentes React utilizados na aplicação.
- **`styles`**: Inclui os estilos em CSS para os componentes.
- **`data`**: Contém dados estáticos utilizados na aplicação (ex.: informações de assentos).

---

## Descrição do Código

O código principal (`Home`) é o ponto de entrada para o layout da página. Ele utiliza os seguintes componentes:

1. **`MovieBox`**: Mostra informações sobre o filme em exibição.
2. **`Seats`**: Renderiza os assentos disponíveis e permite que os usuários selecionem ou desmarquem assentos.
3. **`SeatsContext`**: Contexto que gerencia o estado dos assentos selecionados, o total de assentos selecionados e o preço total.
4. **`Sum`**: Exibe o resumo da seleção, incluindo o preço total e um botão de confirmação de compra.
5. **`Screen`**: Exibe a tela do cinema para visualização do layout.
6. **`Descriptor`**: Mostra a legenda indicando os tipos de assentos (ex.: disponíveis, ocupados, selecionados).
7. **`TextBox`**: Fornece informações ou instruções relacionadas à reserva.

---

### Funcionamento do Código

1. **Provider do Contexto de Assentos**:
   - O componente `SeatsProvider` é usado para encapsular o estado compartilhado entre os componentes (`SeatsContext`).
   - Permite gerenciar a lógica de seleção, desmarcar assentos e calcular o preço total.

2. **Layout**:
   - A estrutura principal utiliza classes CSS de `page.module.css` para organizar o layout.
   - Componentes como `Seats` e `TextBox` são exibidos lado a lado em `contentContainer`.
   - A tela do cinema é representada pelo componente `Screen`, enquanto a legenda é gerenciada pelo componente `Descriptor`.

3. **Resumo e Confirmação**:
   - O componente `Sum` exibe o preço total calculado com base nos assentos selecionados, obtido do `SeatsContext`.
   - Inclui um botão para finalizar a reserva.

---

## Tecnologias Utilizadas

- **React**: Biblioteca para criação da interface do usuário.
- **CSS Modules**: Para estilização modular e isolamento de estilos.
- **Context API**: Para gerenciamento de estado global.
- **JSON**: Utilizado para carregar dados estáticos como assentos e preços.

---

## Como Executar

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
