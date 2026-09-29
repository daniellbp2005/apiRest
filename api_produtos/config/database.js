// criando o pull de conexão com o banco de dados, como o serve já existe só damos o pull, pq se não fica um monilito no qual onde criamos o server aqui
import mysql from "mysql2/promise";
export function criarPool() {
  // cria o pull de conexão q vai acessar o servidor
  return mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.PORT),
    user: process.envDB_USER,
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME,
    connectionLimit: 10, // limite de conexões simultanêas
    waitForConnections: true, // criar um fila de novas requisições, caso o server n suporte mais e p ñ perder nenhuma requizição
    queueLimit: 0, // tamanho da fila. qnts requisições ficarão auradando as 10 finalizarem. usar 0 (ou melhor infinito) apenas em ambiente de teste, em produção, limitar a 30,40,50 dependendo do servidor
  });
}
