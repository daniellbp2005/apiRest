import express from "express";
import { produtosRoutes } from "./routes/produtoRoutes.js";

export const app = express();
app.use(express.json()); // Middleware ensina o express a ler json no body da requisição

app.get("/api/check", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/produto", produtosRoutes);

app.use((req, res) => {
  // a ultima rotA DEVE SEMPRE SER A TRATAMENTO DE ERRO
  res
    .status(404)
    .json({ erro: `A rota ${req.method} ${req.originalUrl} não existe` });
});

app.use((erro, req, res, _next) => {
  console.error("Erro de Sistema: ", erro.message);
  res.status(500).json({ erro: " falaha interna o servidor" }); // erro 500 = erro generico de servidor
});
