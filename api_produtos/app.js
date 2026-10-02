import express from "express";
import { criarPool } from './config/database.js'; // conecta ao banco
import { criarProdutoModel } from './models/ProdutoModel.js';
import { criarProdutoService } from "./services/ProdutoService.js";
import { criarProdutoController } from "./controllers/ProdutoController.js";
import { criarProdutoRoutes } from "./routes/produtoRoutes.js";

export const app = express();
app.use(express.json()); // Middleware ensina o express a ler json no body da requisição

const pool = criarPool();
const produtoModel = criarProdutoModel({ pool });
const produtoService = criarProdutoService({ produtoModel });
const produtoController = criarProdutoController({ produtoService });
const produtoRoutes = criarProdutoRoutes({ produtoController });

app.get("/api/check", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/produto", produtoRoutes);

app.use((req, res) => { // a ultima rotA DEVE SEMPRE SER A TRATAMENTO DE ERRO
  res
    .status(404)
    .json({ erro: `A rota ${req.method} ${req.originalUrl} não existe` });
});

app.use((erro, req, res, _next) => {
  console.error("Erro de Sistema: ", erro.message);
  res.status(500).json({ erro: " falaha interna o servidor" }); // erro 500 = erro generico de servidor
});
