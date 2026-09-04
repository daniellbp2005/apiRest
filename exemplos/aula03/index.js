import Produto from "./Produto.js";
import { formatarMoeda } from "./formatarMoeda.js";

const produto = new Produto({
  id: 1,
  nome: "Mickey Mouse",
  preco: 89.129,
  estoque: 3,
});

// produto.retirar(2);

console.log(produto);
produto.adicionar(2);
console.log(produto);

// console.log(`${produto.nome}: R$ ${produto.preco}`);
// P começar a trabalhar com modulo em js, precisa de um .json, p criar ele npm init -y.
// classe, modulos, midwaer, rotas = ordem import
