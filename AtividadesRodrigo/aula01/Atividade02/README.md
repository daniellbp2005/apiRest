# Atividade 02 — Registrar um script npm

## Objetivo e contexto

Preparar o comando padronizado de inicialização de um pequeno painel de oficina.

- Tempo estimado: 10 minutos
- Nível: inicial

## Enunciado

O programa já imprime sua identidade, mas o `package.json` ainda não oferece o
script `start`. Acrescente o script sem alterar `index.js`.

## Tarefas

1. Abra o arquivo de manifesto do projeto (`package.json`).
2. Localize a sessão destinada aos scripts de execução do NPM.
3. Adicione o script padrão de inicialização (`start`) configurado para rodar o arquivo principal através do Node.js.

## Arquivos iniciais

- `index.js`: programa completo com a entrada contextual `painel-oficina`;
- `package.json`: ponto de implementação, atualmente sem `start`.

## Comandos

```cmd
npm ci
npm run check
npm test
npm start
```

## Estado inicial e resultado esperado

Inicialmente, `npm start` falha informando que o script não existe. Depois da
alteração, o mesmo comando imprime:

```text
painel-oficina@1.0.0
```

## Cenários de verificação

- Sucesso: `npm start` executa `index.js` e retorna código `0`.
- Falha: um nome como `inicio` não atende ao contrato pedido; `npm start`
  continuará indisponível.

## Critérios de conclusão

- `package.json` permanece JSON válido;
- os scripts `start` e `check` coexistem;
- o comando executado está ligado ao arquivo correto;
- a saída coincide exatamente com a identidade do painel.

