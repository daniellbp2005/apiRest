const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { spawnSync } = require('node:child_process');
const { resolve } = require('node:path');

test('oferece o script start ligado ao index.js', () => {
  const diretorio = resolve(__dirname, '..');
  const manifesto = JSON.parse(readFileSync(resolve(diretorio, 'package.json'), 'utf8'));
  assert.equal(manifesto.scripts?.start, 'node index.js');
  const resultado = spawnSync(process.execPath, ['index.js'], { cwd: diretorio, encoding: 'utf8' });
  assert.equal(resultado.status, 0, resultado.stderr);
  assert.equal(resultado.stdout.trim(), 'painel-oficina@1.0.0');
});
