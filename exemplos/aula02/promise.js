// const produtos = [
//   { id: 1, nome: "Mickey Mouse", preco: 80, categoria: "Pereféricos" },
//   { id: 2, nome: "Peteta", preco: 65.2, categoria: "Brinquedo" },
//   { id: 3, nome: "Pato Donald", preco: 75, categoria: "USA" },
// ];

function consultarProduto(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) resolve({ id: 1, nome: "Mouse" });
      else reject(new Error(`Produto ${id} não encontrado`));
    }, 80);
  });
}

consultarProduto(1)
  .then((produtos) => console.log("Sucesso: ", produtos))
  .catch((erro) => console.error("Falha: ", erro.message));

async function executar(id) {
  try {
    const produto = await consultarProduto(id);
    console.log("Sucesso: ", produto);
  } catch (erro) {
    console.error("Falha: ", erro.message);
    process.exitCode = 1;
  }
}

executar(1);
