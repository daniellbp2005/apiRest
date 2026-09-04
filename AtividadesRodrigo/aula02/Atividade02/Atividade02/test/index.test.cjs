const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { resolve } = require('node:path');
const d=resolve(__dirname,'..'); const run=(tipo)=>spawnSync(process.execPath,['index.js',tipo],{cwd:d,encoding:'utf8'});
test('filtra disponíveis e projeta somente tombo e título',()=>{const r=run('Livro');assert.equal(r.status,0,r.stderr);assert.match(r.stdout,/L-101/);assert.doesNotMatch(r.stdout,/L-309|disponivel|tipo/);});
test('informa resultado vazio',()=>{const r=run('Apostila');assert.equal(r.status,1);assert.match(r.stderr,/Nenhum material disponível para Apostila\./);});

