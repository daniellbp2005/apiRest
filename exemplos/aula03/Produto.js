export default class Produto {
  constructor({ id, nome, preco, estoque = 0 }) {
    if (!Number.isInteger(id) || id <= 0) {
      throw new TypeError("ID deve ser inteiro, e positivo");
    }
    if (typeof nome !== "string" || nome.trim() === "") {
      throw new TypeError("Nome deve ser string, e obrigatório");
    }
    if (!Number.isFinite(preco) || preco < 0) {
      throw new TypeError("Preço inválido");
    }
    if (
      !Number.isInteger(estoque) ||
      estoque < 0 ||
      !Number.isFinite(estoque)
    ) {
      throw new TypeError("Estoque inválido");
    }
    Object.assign(this, {
      id,
      nome: nome.trim(),
      preco,
      estoque,
    });
  }
  retirar(quatidade) {
    // erro de range, é do metodo
    if (!Number.isInteger(quatidade) || quatidade <= 0) {
      throw new RangeError("Qtd de saida iniválida");
    }
    if (quatidade > this.estoque) {
      throw new RangeError("Estoque insuficiente");
    }
    this.estoque -= quatidade;
  }
  adicionar(qtd) {
    if (!Number.isInteger(qtd) || qtd <= 0) {
      throw new RangeError("Numero inválido");
    }
    this.estoque += qtd;
  }
}
