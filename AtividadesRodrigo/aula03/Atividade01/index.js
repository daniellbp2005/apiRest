import { formatarMoeda } from './formatarMoeda.js';

const valorDaFerramenta = Number(process.argv[2] || '149.9');

try {
  console.log(`Furadeira: ${formatarMoeda(valorDaFerramenta)}`);
} catch (erro) {
  console.error(erro.message);
  process.exitCode = 1;
}
