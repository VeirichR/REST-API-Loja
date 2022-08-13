import lojas from "../models/Loja.js"

class LojaController {

    static listarLojas = (req, res) => {
        lojas.find()
            .exec((err, lojas) => {
                res.status(200).json(lojas);
            })
    }

    static listarLojaPorId = (req, res) => {
        const id = req.params.id;
        lojas.findById(id)
            .exec((err, lojas) => {
                if(!err){
                    res.status(200).send(lojas);
                } else{
                    res.status(500).send({message: `${err.message} - ID nao encontrado`});
                }
            })
    }

    static cadastrarLoja = (req, res) => {
        let loja = new lojas (req.body);
        loja.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar`});
            } else{
                res.status(201).send(loja.toJSON());
            }
        })
    }

    static atualizarLoja = (req, res) => {
        const id = req.params.id;
        lojas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Loja atualizada com sucesso'});
            } else{
                res.status(500).send({message: `${err.message} - Falha ao atualizar loja`});
            }
        })
    }

    static excluirLoja = (req, res) => {
        const id = req.params.id;
        lojas.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "Loja removida com sucesso"});
            } else {
                res.send(500).send({message: `${err.message} - Falha ao excluir loja`});
            }
        })
    }

}

export default LojaController;