# Atividade 01 - Atualizar estoque sem mutação

## Objetivo e contexto

Atualizar a quantidade de um componente da bancada de Robótica sem modificar o
registro original.

- Tempo estimado: 10 minutos
- Nível: inicial

## Enunciado

Implemente `atualizarEstoque`. A função deve aceitar somente quantidade inteira
maior ou igual a zero e devolver uma cópia criada com spread.

## Tarefas

1. Analise o registro congelado e identifique qual campo representa o saldo.
2. Recuse quantidades que não representem unidades inteiras e não negativas, produzindo a mensagem documentada.
3. Crie e devolva outro objeto com o novo saldo, preservando integralmente o registro original.

## Arquivos iniciais e comandos

`index.js` contém um sensor ultrassônico e a função incompleta. `package.json`
oferece os dois cenários.

```cmd
npm ci
npm run check
npm test
npm start
npm run quantidade-invalida
```






## Saída esperada

Considere a atividade concluída quando o programa atender exatamente aos contratos observáveis abaixo. Nomes de propriedades, mensagens, códigos HTTP e valores são literais.

**Cenários cobrados:**

- cria cópia com estoque atualizado sem mutar o original.
- recusa quantidade inválida.

**Contrato exato verificado pelo teste:**

```javascript
assert.match(codigo,/return\s*\{\s*\.\.\.componente\s*,\s*estoque:\s*quantidade\s*\}/s)
assert.equal(r.status,0,r.stderr)
assert.match(r.stdout,/estoque[^\d]*4/s)
assert.match(r.stdout,/estoque[^\d]*12/s)
assert.equal(r.status,1)
assert.match(r.stderr,/Quantidade de estoque inválida\./)
```

## Estado inicial e resultado esperado

O estado inicial retorna `1` com a mensagem `PENDENTE`. Depois da implementação,
`npm start` mostra estoque original `4` e cópia com estoque `12`. O cenário
inválido mostra `Quantidade de estoque inválida.` e retorna `1`.

## Critérios de conclusão

- o objeto original continua com estoque `4`;
- o resultado é um objeto diferente;
- quantidade negativa ou não inteira é recusada;
- sucesso retorna `0` e falha retorna `1`;
- a solução não exige biblioteca externa.



