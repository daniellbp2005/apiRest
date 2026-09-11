const test=require('node:test');const assert=require('node:assert/strict');const{spawnSync}=require('node:child_process');const{resolve}=require('node:path');const d=resolve(__dirname,'..');const run=(v)=>spawnSync(process.execPath,['index.js',v],{cwd:d,encoding:'utf8'});
test('formata valor em BRL pelo módulo nomeado',()=>{const r=run('149.9');assert.equal(r.status,0,r.stderr);assert.match(r.stdout,/Furadeira:.*R\$.*149,90/);});
test('recusa valor não finito',()=>{const r=run('abc');assert.equal(r.status,1);assert.match(r.stderr,/Valor monetário inválido\./);});

