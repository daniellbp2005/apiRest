const codigoDoPedido = process.argv[2] || "PED-104";
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function consultarSituacao(codigo) {
  await esperar(60);
  return new Promise((resolve, reject) => {
    if (codigoDoPedido) {
      resolve(codigoDoPedido);
      console.log("Consulta existente");
    } else {
      reject(new Error("Erro consulta inexistente"));
    }
  });
}

consultarSituacao(codigoDoPedido)
  .then((situacao) => console.log(situacao))
  .catch((erro) => {
    console.error(erro.message);
    process.exitCode = 1;
  });
