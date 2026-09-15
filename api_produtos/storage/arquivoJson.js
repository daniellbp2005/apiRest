import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import { basename, dirname, join } from "node:path";
import { error } from "node:console";

export async function lerJson(caminho) {
  let texto;
  try {
    texto = await readFile(caminho, "utf8");
  } catch (e) {
    if (e.code === "ENOENT")
      // qnd n localiza o arquivo
      return [];
    throw e;
  }
  try {
    const dados = JSON.parse(texto);
    if (!Array.isArray(dados)) {
      throw new TypeError("Tipo de objeto inválido, deve ser um array");
    }
    return dados;
  } catch (e) {
    if (e instanceof SyntaxError) {
      throw new SyntaxError(`JSON inválido em ${basename(caminho)}`);
    }
    throw e;
  }
}

export async function gravarJson(caminho, dados) {
  if (!Array.isArray(dados)) {
    throw new TypeError("Os dados gravados devem formar um array");
  }
  const diretorio = dirname(caminho);
  await mkdir(diretorio, { recursive: true });

  const temporario = join(
    diretorio,
    `.${basename(caminho)}.${randomUUID()}.tmp`,
  );

  const texto = JSON.stringify(dados, null, 2);
  try {
    await writeFile(temporario, texto, "utf8");
    await rename(temporario, caminho);
  } catch (e) {
    await rm(temporario, { force: true }).catch(() => undefined);
    throw e;
  }
}
