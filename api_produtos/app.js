const arquivoDeConfig = process.argv[2];
const idInformado = process.argv[3];
let configCaregada = true;

if (arquivoDeConfig) {
  try {
    process.loadEnvFile(arquivoDeConfig);
  } catch {
    console.error(`Arquivo configuração não encontrado ${arquivoDeConfig}`);
    process.exitCode = 1;
    configCaregada = false;
  }
}

const obrigatorias = ["PORT", "NOME_ALUNO", "TURMA"];
const ausentes = obrigatorias.filter((nome) => !process.env[nome]?.trim());

if (configCaregada && ausentes.length) {
  console.error(`Configure no .env: ${ausentes.join(",")}`);
  process.exitCode = 1;
  configCaregada = false;
}

const produtos = [
  { id: 1, nome: "Mickey Mouse", preco: 80, categoria: "Pereféricos" },
  { id: 2, nome: "Peteta", preco: 65.2, categoria: "Brinquedo" },
  { id: 3, nome: "Pato Donald", preco: 75, categoria: "USA" },
];

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function buscarProdutoId(id) {
  await esperar(100);
  if (!Number.isInteger(id)) {
    throw new Error("Identificador inteiro Obrigatório");
  }
  const produto = produtos.find((item) => item.id === id);
  if (!produto) {
    // undefined
    throw new Error("Produto", id, "não encontrado!");
  }
  return { ...produto };
}

async function listarCategorias() {
  await esperar(100);
  const categorias = produtos.map(({ categoria }) => categoria);
  return [...new Set(categorias)]; // Set remove as cat duplicadas.
}
