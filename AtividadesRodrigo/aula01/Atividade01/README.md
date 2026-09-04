# Atividade 01 — Completar o diagnóstico do ambiente

## Objetivo e contexto

Completar o diagnóstico usado pela equipe de suporte antes do início de um
projeto Node.js.

- Tempo estimado: 10 minutos
- Nível: inicial

## Enunciado

O arquivo inicial já registra `process.version`. Complete o objeto `diagnostico`
com a plataforma e o diretório atual do processo.

## Tarefas

1. Substitua o comentário `TODO` por duas propriedades.
2. Use `process.platform` para a plataforma.
3. Use `process.cwd()` para o diretório atual.
4. Não escreva valores fixos que só funcionem em sua máquina.

## Arquivos iniciais

- `index.js`: diagnóstico incompleto e verificação observável;
- `package.json`: scripts do exercício.

## Comandos

```cmd
npm ci
npm run check
npm test
npm start
```

## Estado inicial e resultado esperado

Antes da implementação, `npm start` mostra
`PENDENTE: complete o diagnóstico do ambiente.` e retorna código `1`. Depois da
implementação, imprime uma tabela com `node`, `plataforma` e `diretorioAtual` e
retorna código `0`.

## Cenários de verificação

- Sucesso: as três propriedades aparecem e o diretório coincide com a pasta em
  que o terminal foi aberto.
- Falha: um valor fixo como `C:\projeto` não é aceito, pois muda entre máquinas.

## Critérios de conclusão

- as duas APIs corretas de `process` foram usadas;
- nenhuma propriedade ficou vazia;
- a verificação de sintaxe e a execução terminam com sucesso;
- nenhum caminho específico da máquina foi gravado no código.

