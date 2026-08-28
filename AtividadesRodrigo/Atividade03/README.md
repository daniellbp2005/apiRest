# Atividade 03 — Validar argumentos de inscrição

## Objetivo e contexto

Ler pelo terminal o nome e a turma de uma inscrição em laboratório.

- Tempo estimado: 12 minutos
- Nível: intermediário

## Enunciado

Use os valores a partir da posição `2` de `process.argv`. Confirme a inscrição
somente quando nome e turma estiverem presentes.

## Tarefas

1. No arquivo `index.js`, capture os argumentos que o usuário enviou pelo terminal.
2. Lembre-se que as duas primeiras posições do array de argumentos são reservadas ao próprio Node e ao caminho do arquivo. Capture o nome e a turma nas posições corretas.
3. Crie uma estrutura de decisão (if/else) que valide se ambos os dados foram de fato informados.
4. Caso positivo, exiba a confirmação; caso negativo, lance uma mensagem orientando o usuário a preencher nome e turma.

## Arquivos iniciais

- `index.js`: captura a entrada real do terminal e para no ponto pedagógico;
- `package.json`: executa o programa sem esconder os argumentos.

## Comandos

```cmd
npm ci
npm run check
npm test
npm start -- Lucas 3DS-C
```

## Estado inicial e resultado esperado

O estado inicial mostra os argumentos e a mensagem `PENDENTE`, com código `1`.
Após a implementação, o comando válido imprime `Inscrição: Lucas - 3DS-C`.

## Cenários de verificação

```cmd
npm start -- Lucas 3DS-C
npm start -- Lucas
echo %ERRORLEVEL%
```

- Sucesso: nome e turma produzem a confirmação e código `0`.
- Falha: nome sem turma produz `Informe nome e turma.` e código `1`.

## Critérios de conclusão

- as posições destinadas ao executável e ao arquivo não são tratadas como dados;
- os dois argumentos são obrigatórios;
- cada caminho produz a mensagem exata;
- a falha é comunicada ao terminal.

