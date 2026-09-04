const catalogoDaBiblioteca = [
  {
    tombo: "L-101",
    titulo: "JavaScript Essencial",
    tipo: "Livro",
    disponivel: true,
  },
  {
    tombo: "R-205",
    titulo: "Tecnologia em Foco",
    tipo: "Revista",
    disponivel: true,
  },
  {
    tombo: "L-309",
    titulo: "Algoritmos na Prática",
    tipo: "Livro",
    disponivel: false,
  },
];

let tipoDesejado = process.argv[2] || "Livro";

const resultado = catalogoDaBiblioteca
  .filter(({ disponivel }) => disponivel === true)
  .map(({ tombo, titulo }) => ({ tombo, titulo }));

try {
  console.log(resultado);
} catch (e) {
  console.error(e.message);
  process.exitCode = 1;
}
