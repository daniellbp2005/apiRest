const nomeObrigatorios = ["PORT", "NOME_ALUNO", "TURMA"];

export function carregarAmbiente(arquivoDeConfig) {
  if (arquivoDeConfig) {
    try {
      process.loadEnvFile(arquivoDeConfig);
    } catch {
      throw new Error(
        `Arquivo de configuração não localizado; ${arquivoDeConfig}`,
      );
    }
  }
  const ausentes = nomeObrigatorios.filter((nome) => {
    const valor = process.env[nome];
    return typeof valor !== "string" || valor.trim() === "";
  });

  if (ausentes.length > 0) {
    throw new Error(`Configurações no .env: ${ausentes.join(", ")}`);
  }

  return {
    nomeAluno: process.env.NOME_ALUNO,
    turma: process.env.TURMA,
    ambiente: process.env.NODE_ENV || "development",
    portaConfigurada: Number(process.env.PORT),
  };
}

export function exibirDiagnostio(configuracao) {
  console.table({
    estudante: configuracao.nomeAluno,
    turma: configuracao.turma,
    projeto: "api_produtos",
    ambiente: configuracao.ambiente,
    node: process.version,
    sistema: `${process.platform} ${process.arch}`,
    diretorio: process.cwd(),
    portaConfigurada: configuracao.portaConfigurada,
  });
}
