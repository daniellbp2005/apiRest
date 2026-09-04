const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { spawnSync } = require('node:child_process');
const { resolve } = require('node:path');
const d = resolve(__dirname, '..');
const run = (q) => spawnSync(process.execPath, ['index.js', q], { cwd: d, encoding: 'utf8' });
test('cria cópia com estoque atualizado sem mutar o original', () => { const codigo=readFileSync(resolve(d,'index.js'),'utf8'); assert.match(codigo,/return\s*\{\s*\.\.\.componente\s*,\s*estoque:\s*quantidade\s*\}/s); const r=run('12'); assert.equal(r.status,0,r.stderr); assert.match(r.stdout,/estoque[^\d]*4/s); assert.match(r.stdout,/estoque[^\d]*12/s); });
test('recusa quantidade inválida', () => { const r=run('-1'); assert.equal(r.status,1); assert.match(r.stderr,/Quantidade de estoque inválida\./); });

