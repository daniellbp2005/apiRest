# Atividade 02 - Isolar o catálogo de ferramentas

## Objetivo e contexto

Separar dados de ferramentas e impedir que consumidores alterem a origem.

- Tempo estimado: 12 minutos
- Nível: inicial

## Enunciado

Implemente `listarFerramentas` com `filter` e `map`. Cada chamada deve devolver
um novo array e novas cópias dos objetos da categoria solicitada.

## Tarefas

1. Encapsule o catálogo em seu próprio módulo, sem expor a coleção interna.
2. Selecione os itens da categoria recebida e devolva cópias independentes.
3. Trate a categoria sem resultados com a mensagem indicada.

## Comandos e estado inicial

```cmd
npm ci
npm run check
npm test
npm start
npm run categoria-ausente
```

O estado inicial retorna `PENDENTE`. Depois da implementação, a primeira leitura
é alterada localmente para estoque `0`, mas a segunda continua mostrando `6`.
Soldagem produz array vazio, mensagem específica e código `1`.






## Saída esperada

Considere a atividade concluída quando o programa atender exatamente aos contratos observáveis abaixo. Nomes de propriedades, mensagens, códigos HTTP e valores são literais.

**Cenários cobrados:**

- devolve cópias sem expor o catálogo interno.
- trata categoria ausente.

**Comportamento esperado em linguagem direta:**

- O programa deve terminar com código **0**.
- A saída padrão do terminal deve conter `estoque: 0`.
- A saída padrão do terminal deve conter `estoque: 6`.
- A saída padrão do terminal deve conter `MED-03`.
- O programa deve terminar com código **1**.
- A saída de erro do terminal deve conter `Nenhuma ferramenta encontrada em Soldagem.`.

## Estado inicial e resultado esperado

Enquanto o `TODO` estiver pendente, a verificação correspondente deve falhar. Depois da implementação:

- Devolve cópias sem expor o catálogo interno.
- Trata categoria ausente.

Mensagens literais verificadas pela suíte: `Nenhuma ferramenta encontrada em Soldagem.`.

## Critérios de conclusão

- o array interno não é exportado;
- a mutação da primeira leitura não afeta a segunda;
- Medição devolve dois itens;
- categoria inexistente retorna código `1` no ponto de entrada;
- todos os JavaScript são verificados dinamicamente.





