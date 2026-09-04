# Atividade 03 - Consultar pedido com Promise

## Objetivo e contexto

Representar uma consulta assíncrona ao acompanhamento de pedidos.

- Tempo estimado: 12 minutos
- Nível: intermediário

## Enunciado

Implemente `consultarSituacao` com `new Promise` e `setTimeout` de 60 ms. O código
`PED-104` deve resolver; qualquer outro deve rejeitar.

## Tarefas

1. Modele a consulta como uma operação que termina depois do intervalo simulado.
2. Resolva o pedido conhecido com seus dados e rejeite códigos ausentes com uma mensagem contextualizada.
3. Garanta que quem chama a consulta consiga observar tanto o sucesso quanto a falha assíncrona.

## Arquivos iniciais e comandos

```cmd
npm ci
npm run check
npm test
npm start
npm run pedido-ausente
```






## Saída esperada

Considere a atividade concluída quando o programa atender exatamente aos contratos observáveis abaixo. Nomes de propriedades, mensagens, códigos HTTP e valores são literais.

**Cenários cobrados:**

- resolve o pedido conhecido após 60 ms.
- rejeita pedido ausente.

**Saída esperada no terminal:**

- O seu código deve conter um `setTimeout` de exatos `60` milissegundos.
- Cenário de sucesso (`npm start`): Dados do pedido `PED-104` e o texto `separado`.
- Cenário de falha (`npm run pedido-ausente`): `Pedido PED-999 não encontrado.`

## Estado inicial e resultado esperado

O arquivo inicial produz uma rejeição `PENDENTE` controlada, sem erro de sintaxe
ou importação. Depois da implementação, `npm start` resolve e retorna `0`;
`npm run pedido-ausente` mostra `Pedido PED-999 não encontrado.` e retorna `1`.

## Critérios de conclusão

- a função sempre devolve uma Promise;
- `resolve` e `reject` são usados nos caminhos corretos;
- o atraso é de 60 ms;
- a rejeição é consumida e não fica sem tratamento;
- sucesso e falha produzem códigos coerentes.



