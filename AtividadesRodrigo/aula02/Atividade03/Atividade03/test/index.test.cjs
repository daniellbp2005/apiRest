const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { spawnSync } = require('node:child_process');
const { resolve } = require('node:path');
const d=resolve(__dirname,'..'); const run=(codigo)=>spawnSync(process.execPath,['index.js',codigo],{cwd:d,encoding:'utf8'});
test('resolve o pedido conhecido após 60 ms',()=>{const codigo=readFileSync(resolve(d,'index.js'),'utf8');assert.match(codigo,/setTimeout[\s\S]*60/);const r=run('PED-104');assert.equal(r.status,0,r.stderr);assert.match(r.stdout,/PED-104/);assert.match(r.stdout,/separado/);});
test('rejeita pedido ausente',()=>{const r=run('PED-999');assert.equal(r.status,1);assert.match(r.stderr,/Pedido PED-999 não encontrado\./);});

