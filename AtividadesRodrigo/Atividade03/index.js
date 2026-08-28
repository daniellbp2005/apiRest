const nomeInformado = process.argv[2];
const turmaInformada = process.argv[3];

// console.log("Entrada recebida:", { nomeInformado, turmaInformada });
// console.error("PENDENTE: valide nome e turma antes de confirmar a inscrição.");
// process.exitCode = 1;

// TODO: substitua as três linhas acima pela validação e pela confirmação pedidas.

if (!nomeInformado) {
  console.error("Informe o nome");
  process.exitCode = 1;
}
if (!turmaInformada) {
  console.error("Informe a turma");
  process.exitCode = 1;
}

console.log("Entrada recebida:", { nomeInformado, turmaInformada });
