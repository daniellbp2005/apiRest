const diagnostico = {
  node: process.version,
  plataforma: process.platform,
  diretorioAtual: process.cwd(),
};

if (!diagnostico.plataforma || !diagnostico.diretorioAtual) {
  console.error("PENDENTE: complete o diagnóstico do ambiente.");
  process.exitCode = 1;
} else {
  console.table(diagnostico);
}
