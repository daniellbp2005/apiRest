export function criarProdutoController({produtoService}) {
    async function listar(req,res,next){
        try {
            const produtos = await produtoService.listar();
            res.status(200).json({sucesso:true, dados:produtos});
        } catch (e) {
            next(e)          
        }
    }

    async function buscar(req,res,next) {
        try {
            const produto = await produtoService.buscarPorId(req.params.id);
            res.status(201).json({secesso:true, dados: produto})
        } catch (e) {
            if (e instanceof TypeError ){
                return res.status(400).json({erro:e.message})
            }
            if (e.message.includes('não encontrado')){
                return res.status(404).json({erro: e.message});
            }
            next(e);
        }
    }

    async function criar(req, res, next) {
        try {
            const produtoNovo = await produtoService.criar(req.body);
            res.status(201).json({ sucesso: true, dados: produtoNovo });
        } catch (e) {
            res.status(400).json({ sucesso: false, erro: e.message });
        }
    }

    return { listar, buscar, criar };
}