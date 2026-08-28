const original = {
  id: 1,
  nome: "Mickey Mouse",
  estoque: 8,
  // cat: ["legal","chato"]
};

const atualizado = { ...original, estoque: 5 }; // Isso é uma copia do obejeto acima um spreed. Os três pontos diz ao js q é um spreed.
console.log({ original, atualizado });

const { nome, estoque } = atualizado;
console.log(`${nome} possui ${estoque} unidade(s)`);
console.log(`O conteudo de Atualizado é ${atualizado}`);
console.log("O conteudo de Atualizado é ", atualizado);
// `` só aceita string e int, pq são de um nivél. Pois são objetos de um nivél Object: array, objeto e matrix, ele nao mostra.
