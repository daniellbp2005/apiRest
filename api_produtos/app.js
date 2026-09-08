import { buscarProdutoPorId, listarCategorias } from "./catalogo/consultas.js";
import { carregarAmbiente, exibirDiagnostio } from "./config/ambiente.js";
import { formatarMoeda } from "./utils/formatarMoeda.js";

async function executar() {
  try {
    const configuracao = carregarAmbiente(process.argv[2]);
    const idSolicitado = Number(process.argv[3] || "1");

    if (!Number.isInteger(idSolicitado) || idSolicitado <= 0) {
      throw new Error("Informa um id válido p o produto, dv ser > 0 e inteiro");
    }

    exibirDiagnostio(configuracao);
    const [produto, categorias] = await Promise.all([
      buscarProdutoPorId(idSolicitado),
      listarCategorias(),
    ]);

    console.table({
      produto: {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        precoFormatado: formatarMoeda(produto.preco),
        estoque: produto.estoque,
        categoria: produto.categoria,
        valorEmEstoque: produto.calcularValorEmEstoque(),
        valorEmEstoqueFormatado: formatarMoeda(
          produto.calcularValorEmEstoque(),
        ),
      },
      categorias,
    });
  } catch (e) {
    console.log(e.message);
    process.exitCode = 1;
  }
}

executar();
