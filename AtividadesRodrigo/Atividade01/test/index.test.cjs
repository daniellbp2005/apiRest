const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { spawnSync } = require('node:child_process');
const { resolve } = require('node:path');

test('usa process.platform e process.cwd no diagnóstico', () => {
  const diretorio = resolve(__dirname, '..');
  const codigo = readFileSync(resolve(diretorio, 'index.js'), 'utf8');
  assert.match(codigo, /plataforma\s*:\s*process\.platform/);
  assert.match(codigo, /diretorioAtual\s*:\s*process\.cwd\(\)/);
  const resultado = spawnSync(process.execPath, ['index.js'], { cwd: diretorio, encoding: 'utf8' });
  assert.equal(resultado.status, 0, resultado.stderr);
});
