const dadosDoCatalogo = [
  { id: 1, nome: "Pateta", preco: 65, estoque: 12, categoria: "Periféricos" },
  { id: 2, nome: "Monitor", preco: 80, estoque: 8, categoria: "Video" },
  { id: 2, nome: "Mouse", preco: 96, estoque: 9, categoria: "Periféricos" },
];

export function listarDadosDoCatalogo() {
  return dadosDoCatalogo.map((produto) => ({ ...produto }));
}
