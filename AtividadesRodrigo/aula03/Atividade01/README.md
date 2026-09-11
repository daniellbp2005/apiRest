# Atividade 01 - Exportar um formatador nomeado

## Objetivo e contexto

Extrair a formatação do preço de uma ferramenta para um módulo sem estado.

- Tempo estimado: 10 minutos
- Nível: inicial

## Enunciado

Complete `formatarMoeda.js`. A função exportada deve aceitar somente número
finito e usar `Intl.NumberFormat` com localidade `pt-BR` e moeda `BRL`.

## Tarefas

1. Mantenha a responsabilidade de formatação monetária em um módulo reutilizável.
2. Exporte o comportamento e consuma-o no ponto de entrada para apresentar o preço do item.
3. Recuse valores que não possam representar uma quantia financeira finita.

## Comandos e estado inicial

```cmd
npm ci
npm run check
npm test
npm start
npm run valor-invalido
```

Inicialmente os dois comportamentos retornam `1` com `PENDENTE`. Depois da
implementação, `npm start` formata `149.9`; `valor-invalido` mostra a mensagem
pedida e retorna `1`.






## Saída esperada

Considere a atividade concluída quando o programa atender exatamente aos contratos observáveis abaixo. Nomes de propriedades, mensagens, códigos HTTP e valores são literais.

**Cenários cobrados:**

- formata valor em BRL pelo módulo nomeado.
- recusa valor não finito.

**Comportamento esperado em linguagem direta:**

- O programa deve terminar com código **0**.
- A saída padrão do terminal deve conter `Furadeira:...R$...149,90`.
- O programa deve terminar com código **1**.
- A saída de erro do terminal deve conter `Valor monetário inválido.`.

## Estado inicial e resultado esperado

Enquanto o `TODO` estiver pendente, a verificação correspondente deve falhar. Depois da implementação:

- Formata valor em BRL pelo módulo nomeado.
- Recusa valor não finito.

Mensagens literais verificadas pela suíte: `Valor monetário inválido.`.

## Critérios de conclusão

- export e import possuem o mesmo nome;
- o caminho local contém extensão `.js`;
- o valor válido retorna código `0`;
- `NaN` é recusado;
- `npm run check` verifica os três JavaScript do projeto.





