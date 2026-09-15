const produto = { id: 1, nome: "Teclado", preco: 249.9, disponivel: true };

const texto = JSON.stringify(produto, null, 2);
const js = JSON.parse(texto);
