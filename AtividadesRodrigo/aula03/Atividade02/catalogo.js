const ferramentas = [
  { codigo: "MED-01", nome: "Paquímetro", cat: "Medição", estoque: 6 },
  {
    codigo: "COR-02",
    nome: "Alicate de corte",
    cat: "Corte",
    estoque: 9,
  },
  { codigo: "MED-03", nome: "Trena", cat: "Medição", estoque: 4 },
];

export function listarFerramentas(categoria) {
  const dados = ferramentas
    .filter((p) => p.cat === categoria)
    .map((p) => ({ ...p }));
  if (dados.length === 0) {
    throw new Error(
      `Nenhuma ferramenta encontrada para a categoria: ${categoria}`,
    );
  }
  return [...dados];
}
