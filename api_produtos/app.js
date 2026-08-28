const arquivoDeConfig = process.argv[2];
const idInformado = process.argv[3];
let configCarregada = true;

if (arquivoDeConfig) {
  try {
    process.loadEnvFile(arquivoDeConfig);
  } catch {
    console.error(`Arquivo configuração não encontrado ${arquivoDeConfig}`);
    process.exitCode = 1;
    configCarregada = false;
  }
}

const obrigatorias = ["PORT", "NOME_ALUNO", "TURMA"];
const ausentes = obrigatorias.filter((nome) => !process.env[nome]?.trim());

if (configCarregada && ausentes.length) {
  console.error(`Configure no .env: ${ausentes.join(",")}`);
  process.exitCode = 1;
  configCarregada = false;
}

const produtos = [
  {
    id: 1,
    nome: "Mickey Mouse",
    preco: 80,
    categoria: "Periféricos",
    estoque: 4,
  },
  { id: 2, nome: "Peteta", preco: 65.2, categoria: "Brinquedo", estoque: 5 },
  { id: 3, nome: "Pato Donald", preco: 75, categoria: "USA", estoque: 2 },
];

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function buscarProdutoId(id) {
  await esperar(100);
  if (!Number.isInteger(id)) {
    throw new Error("Identificador inteiro Obrigatório");
  }
  const produto = produtos.find((item) => item.id === id);
  if (!produto) {
    // undefined, qnd o find passa o array todo e n encontra o item procurado ele da undefined.
    throw new Error(`Produto ${id} não encontrado!`); //throw para a execução do programa, enquanto mostra a msg.
  }
  return { ...produto };
}

async function listarCategorias() {
  await esperar(100);
  const categorias = produtos.map(({ categoria }) => categoria);
  return [...new Set(categorias)]; // Set remove as cat duplicadas.
}

async function executar() {
  if (!configCarregada) return;
  try {
    const id = Number(idInformado ?? 1);
    const [produto, categorias] = await Promise.all([
      buscarProdutoId(id),
      listarCategorias(),
    ]);
    console.log("Produto: ", produto);
    console.log("Valor em estoque: ", produto.preco * produto.estoque);
    console.log("Categorias: ", categorias);
  } catch (erro) {
    console.error(erro.message);
    process.exitCode = 1;
  }
}

executar();
