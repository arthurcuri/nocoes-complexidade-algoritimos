# Análise Assintótica de Funções e Complexidade de Algoritmos

## Visão Geral

Este projeto consiste em uma aplicação web que permite visualizar o comportamento assintótico de duas funções matemáticas, comparando suas taxas de crescimento com base na entrada do usuário. O foco é fornecer uma ferramenta interativa para análise de complexidade de algoritmos, ajudando a determinar a notação de complexidade (Big O, Ômega e Theta) de funções de tempo de execução.

A aplicação utiliza as bibliotecas **Math.js** e **Plotly** para calcular e visualizar graficamente as funções inseridas. A interface gráfica é construída com **HTML**, **CSS**, **JavaScript** e **Bootstrap**.

## Como Funciona

### Objetivo
O principal objetivo é analisar o comportamento assintótico de uma função `f(n)` comparada a uma função de referência `g(n)`. Através da visualização gráfica, é possível identificar se `f(n)` é:

- **O(g(n))**: A função `f(n)` é limitada superiormente por `g(n)`, indicando o **pior caso**.
- **Ω(g(n))**: A função `f(n)` é limitada inferiormente por `g(n)`, indicando o **melhor caso**.
- **Θ(g(n))**: A função `f(n)` tem crescimento equivalente a `g(n)` para valores grandes de `n`.

### Componentes

1. **HTML**: Define a estrutura da página com campos de entrada para as funções `f(n)` e `g(n)`, além de valores para as constantes `C1`, `C2` e o limite superior `N` para a análise.
   
2. **CSS**: Responsável pela estilização da página para garantir uma interface simples e funcional.

3. **JavaScript**: Implementa a lógica de avaliação das funções `f(n)` e `g(n)`, utilizando as bibliotecas **Math.js** para a avaliação das expressões e **Plotly** para gerar os gráficos.

### Funcionalidades

- **Entrada de funções**: O usuário pode inserir expressões matemáticas para `f(n)` e `g(n)`.
- **Constantes de multiplicação**: O usuário pode modificar as constantes `C1` e `C2` para multiplicar `g(n)`, visualizando diferentes ajustes para comparações assintóticas.
- **Gráficos interativos**: Os gráficos mostram como `f(n)` e `g(n)` crescem conforme o valor de `n` aumenta.
- **Comparação visual**: O gráfico permite comparar `f(n)` com `g(n)` e suas variações, ajudando na análise da complexidade do algoritmo.

## Exemplos de Uso

### Exemplo 1: Comparando funções quadráticas

- **Entrada:**
  - `f(n) = 3*(n^2) - 30`
  - `g(n) = n^2`
  - `C1 = 1`
  - `C2 = 5`
  - `N = 10`

Esse exemplo compara a função `f(n) = 3n^2 - 30` com a função de referência `g(n) = n^2`. O gráfico resultante mostra que, apesar das diferenças de constantes, ambas as funções têm um comportamento semelhante para valores grandes de `n`, indicando que `f(n) = Θ(n^2)`.

### Exemplo 2: Analisando a função `m^2 + 10` com Big O

- **Análise:**
  O objetivo é verificar se `f(m) = m^2 + 10` é `O(m^2)` comparando com a função `g(m) = m^2` utilizando uma constante `c = 2`. A desigualdade analisada foi:

  \[
  m^2 + 10 \leq 2 \cdot m^2
  \]

  A partir de \( m = 4 \), a desigualdade se torna verdadeira, o que sugere que `f(m) = O(m^2)` para valores suficientemente grandes de \( m \).

  O gráfico pode ser utilizado para visualizar essa comparação.

## Conceitos de Complexidade de Algoritmos

### Big O (O)
A notação Big O representa a **cota superior** do crescimento de uma função. Ela descreve o tempo de execução ou o espaço usado no **pior caso**. No exemplo dado, `f(n) = 3n^2 - 30` tem um crescimento assintótico de \( O(n^2) \), uma vez que o termo de maior ordem (n^2) domina o comportamento da função para valores grandes de `n`.

### Ômega (Ω)
A notação Ômega é a **cota inferior**, representando o **melhor caso**. Se a função `f(n)` nunca cresce mais rápido que `g(n)`, dizemos que `f(n) = Ω(g(n))`.

### Theta (Θ)
A notação Theta implica que uma função tem crescimento **equivalente** a outra, sendo limitada tanto superior quanto inferiormente. Se `f(n) = Θ(g(n))`, significa que `f(n)` e `g(n)` crescem à mesma taxa para grandes valores de `n`.

## Instruções para Rodar o Projeto

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Insira as funções `f(n)` e `g(n)`, bem como as constantes `C1`, `C2` e o valor de `N` que deseja analisar.
4. Clique em "Atualizar" para gerar o gráfico.

## Dependências

- [Math.js](https://mathjs.org/): Biblioteca para a manipulação de expressões matemáticas.
- [Plotly.js](https://plotly.com/javascript/): Biblioteca para a geração de gráficos interativos.
- [Bootstrap 4.3.1](https://getbootstrap.com/): Framework CSS para estilização.


## Futuras Melhorias

- Implementar análises automáticas para verificar se uma função é de fato \( O(g(n)) \), \( Ω(g(n)) \) ou \( Θ(g(n)) \) com base na entrada do usuário.
- Permitir a entrada de outras funções de referência populares, como \( n\log n \), para análise de algoritmos mais complexos.
- Adicionar mais opções de personalização para os gráficos, como cores e tipos de traços.


