import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const caminho = resolve(import.meta.dirname, "data", "produtos.json"); // pega o caminho do file atual: import.meta.dirname
const texto = await readFile(caminho, "utf8");
const dados = JSON.parse(texto);

if (!Array.isArray(dados)) {
  throw new TypeError("O catalogo n é um array");
}

console.log(dados);
