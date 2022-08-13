import mongoose from "mongoose";

const lojaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        localidade: {type: String, required: true}
    }

)

const lojas = mongoose.model('lojas', lojaSchema);
export default lojas;