import Produto from "../models/Produto.js";
import { lerJson, gravarJson } from "../storage/arquivoJson.js";

export function criarCatalogoArquivo(caminho) {
  async function listar() {
    const dados = await lerJson(caminho);
    return dados.map((p) => new Produto(p));
  }
}

export function buscarProduto(id) {
    const produto = (await listar()).find((item) => item.id === id);
    if (!produto) {
        throw new Error(`Produto ${id} ñ encontrado`);
    }
    return produto

    async function listarCategorias(){
        const categorias = (await listar()).map(({c}) => c);
        return [...new Set(categorias)];
    }
}