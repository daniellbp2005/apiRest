import express from "express";
import { resolve } from "node:path";
import { criarCatalogoArquivo } from "../catalogo/catalogoArquivo.js";

const caminhoCatalogo =
  process.env.CATALOGO_ARQUIVO ||
  resolve(import.meta.dirname, "../data/produtos.json");
const catalogo = criarCatalogoArquivo(caminhoCatalogo);

export const produtosRoutes = express.Router();

produtosRoutes.get("/", async (req, res, next) => {
  try {
    const produtos = await catalogo.listar();
    res.status(200).json({
      sucesso: true,
      dados: produtos,
    });
  } catch (e) {
    next(e); // envia p o middleware de erro
  }
});

produtosRoutes.post("/", async (req, res) => {
  //N envia o next pq já tem o erro da classe no produto
  const { nome, preco, estoque, categoria } = req.body; // Pega esses items no body da req
  const produto = await catalogo.criar({ nome, preco, estoque, categoria });
  res.json({
    sucesso: true,
    dados: produto,
  });
});

produtosRoutes.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id); // Params, é p se referenciar ao parametro da url, nessa caso o id
    if (!Number.isInteger(id))
      return res.status(400).json({
        erro: "Id deve ser inteiro",
      });
    const produto = await catalogo.buscarPorId(id);
    res.status(200).json({
      sucesso: true,
      dados: produto,
    });
  } catch (e) {
    if (e.message.includes("não encontrado")) {
      return res.status(404).json({
        erro: e.message,
      });
    }
    next(e);
  }
});
