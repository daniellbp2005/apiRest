import { writeFile, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const caminho = resolve(import.meta.dirname, "data", "saida.json");
const produtos = [{ id: 1, nome: "monitor", preco: 123 }];
const texto = JSON.stringify(produtos, null, 2);

await writeFile(caminho, texto, "utf8");
console.log(JSON.parse(await readFile(caminho)));
