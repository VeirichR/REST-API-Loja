import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        valor: {type: String, required: true},
        loja: {type: mongoose.Schema.Types.ObjectId, ref: 'lojas', required: true}
    }
)

const produtos = mongoose.model('produtos', produtoSchema);
export default produtos;