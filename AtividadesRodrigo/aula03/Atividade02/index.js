import { listarFerramentas } from './catalogo.js';

const categoria = process.argv[2] || 'Medição';

try {
  const primeiraLeitura = listarFerramentas(categoria);

  if (primeiraLeitura.length === 0) {
    throw new Error(`Nenhuma ferramenta encontrada em ${categoria}.`);
  }

  primeiraLeitura[0].estoque = 0;
  const segundaLeitura = listarFerramentas(categoria);
  console.log({ primeiraLeitura, segundaLeitura });
} catch (erro) {
  console.error(erro.message);
  process.exitCode = 1;
}
