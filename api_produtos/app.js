import { resolve } from "node:path";
import { criarCatalogoArquivo } from "./catalogo/catalogoArquivo.js";
import { carregarAmbiente, exibirDiagnostio } from "./config/ambiente.js";
import { formatarMoeda } from "./utils/formatarMoeda.js";

function resumirProduto(produto) {
  return {
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco,
    precoFormatado: formatarMoeda(produto.preco),
    estoque: produto.estoque,
    categoria: produto.categoria,
    valorEmEstoque: produto.calcularValorEmEstoque(),
  };
}

async function executar() {
  try {
    const configuracao = carregarAmbiente(process.argv[2]);
    const comando = process.argv[3] || "listar";
    const caminhoPadrao = resolve(import.meta.dirname, "data/produtos.json");
    const caminhoCatalogo = process.env.CATALOGO_ARQUIVO || caminhoPadrao;
    const catalogo = criarCatalogoArquivo(caminhoCatalogo);

    exibirDiagnostio(configuracao);

    if (comando === "listar") {
      console.table((await catalogo.listar()).map(resumirProduto));
    } else if (comando === "buscar") {
      const id = Number(process.argv[4]);
      if (!Number.isInteger(id))
        throw new Error("Informe um identificador inteiro");
      console.log(resumirProduto(await catalogo.buscarPorId(id)));
    } else if (comando === "categorias") {
      console.log(await catalogo.listarCategorias());
    } else if (comando === "criar") {
      const produto = await catalogo.criar({
        nome: process.argv[4],
        preco: Number(process.argv[5]),
        estoque: Number(process.argv[6] || "0"),
        categoria: process.argv[7] || "geral",
      });
      console.log(resumirProduto(produto));
    } else {
      throw new Error(
        "Use: listar | buscar <id> | categorias | criar <nome> <preco> [estoque] [categoria]",
      );
    }
  } catch (e) {
    console.log(e.message);
    process.exitCode = 1;
  }
}

executar();
