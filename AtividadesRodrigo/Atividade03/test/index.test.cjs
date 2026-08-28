const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { resolve } = require('node:path');
const diretorio = resolve(__dirname, '..');
const executar = (...args) => spawnSync(process.execPath, ['index.js', ...args], { cwd: diretorio, encoding: 'utf8' });
test('confirma nome e turma recebidos', () => { const r = executar('Lucas', '3DS-C'); assert.equal(r.status, 0, r.stderr); assert.equal(r.stdout.trim(), 'Inscrição: Lucas - 3DS-C'); });
test('recusa inscrição incompleta', () => { const r = executar('Lucas'); assert.equal(r.status, 1); assert.match(r.stderr, /Informe nome e turma\./); });
