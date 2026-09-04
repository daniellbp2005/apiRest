const componenteOriginal = Object.freeze({
  id: 17,
  nome: "Sensor ultrassônico",
  estoque: 4,
  bancada: "Robótica",
});

const novoEstoque = Number(process.argv[2] || "12");

// TODO: valide a quantidade e devolva uma cópia com spread.
function atualizarEstoque(componente, quantidade) {
  if (quantidade < 0) throw new Error("Quantidade deve ser positiva");

  if (componente < 0) throw new Error("Valor invalido de componente");

  if (!Number.isInteger(quantidade)) {
    throw new Error("quantidade invalida, deve ser inteira");
  }

  return { ...componente, estoque: quantidade };
}
try {
  const componenteAtualizado = atualizarEstoque(
    componenteOriginal,
    novoEstoque,
  );
  console.log({ componenteOriginal, componenteAtualizado });
} catch (erro) {
  console.error(erro.message);
  process.exitCode = 1;
}
