const produtos = [
  { id: 1, nome: "Mickey Mouse", preco: 80, categoria: "Pereféricos" },
  { id: 2, nome: "Peteta", preco: 65.2, categoria: "Brinquedo" },
  { id: 3, nome: "Pato Donald", preco: 75, categoria: "USA" },
];

// console.log(produtos);

// .map
// .filter
// .find "O primeiro valor q encontrar"

const map = produtos.map((d) => d.nome + " foi");
const filter = produtos.filter((d) => d.categoria.includes("USA"));
const find = produtos.find((d) => (d.id = 3));

// console.log(find);
// console.log(map);
// colocar chaves pega só o item, n a linha

const reajustados = produtos
  .filter(({ categoria }) => categoria === "Pereféricos") // colocar chaves pega só o item, n a linha
  .map((p) => ({
    ...p,
    preco: p.preco * 1.2,
  }));

// console.log(produtos, reajustados);
