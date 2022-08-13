import produtos from "../models/Produto.js";

class ProdutoController {

    static listarProdutos = (req, res) => {
        produtos.find()
            .populate('loja')
            .exec((err, livros) => {
                if(!err){
                    res.status(200).json(livros);
                } else{
                    res.status(500).send({message: err.message});
                }
            })
    }

    static listarProdutosPorId = (req, res) => {
        const id = req.params.id;
        produtos.findById(id)
            .populate('loja')
            .exec((err, produtos) => {
                if(!err){
                    res.status(200).send(produtos);
                } else{
                    res.status(400).send({message: `${err.message} - ID nao localizado`});
                }
            })
    }

    static cadastrarProdutos = (req, res) => {
        let produto = new produtos (req.body);
        produto.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar`});
            } else {
                res.status(201).send(produto.toJSON());
            }
        })
    }

    static atualizarProdutos = (req, res) => {
        const id = req.params.id;
        produtos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'produto atualizado com sucesso!'});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }

    static excluirProdutos = (req, res) => {
        const id = req.params.id;
        produtos.findByIdAndDelete(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Produto excluido com sucesso'});
            } else{
                res.status(500).send({message: err.message});
            }
        })
    }


}

export default ProdutoController;