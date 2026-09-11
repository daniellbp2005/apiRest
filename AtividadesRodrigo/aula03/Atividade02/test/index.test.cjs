const test=require('node:test');const assert=require('node:assert/strict');const{spawnSync}=require('node:child_process');const{resolve}=require('node:path');const d=resolve(__dirname,'..');const run=(c)=>spawnSync(process.execPath,['index.js',c],{cwd:d,encoding:'utf8'});
test('devolve cópias sem expor o catálogo interno',()=>{const r=run('Medição');assert.equal(r.status,0,r.stderr);assert.match(r.stdout,/estoque:\s*0/);assert.match(r.stdout,/estoque:\s*6/);assert.match(r.stdout,/MED-03/);});
test('trata categoria ausente',()=>{const r=run('Soldagem');assert.equal(r.status,1);assert.match(r.stderr,/Nenhuma ferramenta encontrada em Soldagem\./);});

