const [, , nome, turma] = process.argv; // ele recebe do terminal o argumento: node file.js nome turma, por isso o dois ,, vazias.

if (!nome || !turma) {
  console.error("Use: node argumento.js <nome> <turma>");
  process.exitCode = 1;
} else {
  console.log({ nome, turma });
}
