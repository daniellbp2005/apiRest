# Atividade 02 - Filtrar o catálogo da biblioteca

## Objetivo e contexto

Selecionar materiais disponíveis de um tipo e projetar uma resposta enxuta.

- Tempo estimado: 12 minutos
- Nível: inicial

## Enunciado

Use `filter` para manter itens do tipo solicitado que estejam disponíveis e
`map` para devolver somente `tombo` e `titulo`. Não altere o catálogo original.

## Tarefas

1. Percorra o catálogo sem modificar a coleção recebida.
2. Mantenha somente materiais disponíveis do tipo solicitado e projete apenas os dados públicos pedidos.
3. Quando não houver resultado, encerre o cenário com a mensagem especificada no resultado esperado.

## Arquivos iniciais e comandos

O `index.js` contém livros e revista com estados diferentes.

```cmd
npm ci
npm run check
npm test
npm start
npm run tipo-ausente
```






## Saída esperada

Considere a atividade concluída quando o programa atender exatamente aos contratos observáveis abaixo. Nomes de propriedades, mensagens, códigos HTTP e valores são literais.

**Cenários cobrados:**

- filtra disponíveis e projeta somente tombo e título.
- informa resultado vazio.

**Saída esperada no terminal:**

- Cenário de sucesso (`npm start`): Apenas o item `L-101` com suas propriedades filtradas (sem as chaves `disponivel` ou `tipo`).
- Cenário vazio (`npm run tipo-ausente`): `Nenhum material disponível para Apostila.`

## Estado inicial e resultado esperado

Inicialmente o script mostra a entrada e para em `PENDENTE`. Depois da solução,
`npm start` devolve somente o item `L-101`; o livro indisponível não aparece. O
tipo Apostila produz a mensagem de ausência e código `1`.

Mensagens literais verificadas pela suíte: `Nenhum material disponível para Apostila.`.

## Critérios de conclusão

- `filter` e `map` têm responsabilidades distintas;
- o resultado não contém `tipo` nem `disponivel`;
- o catálogo continua com três objetos inalterados;
- os caminhos válido e vazio são observáveis;
- nenhum laço com mutação do array original foi usado.



