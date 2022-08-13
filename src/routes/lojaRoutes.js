import express from "express";
import LojaController from "../controllers/lojasController.js";

const router = express.Router();

router
    .get("/lojas", LojaController.listarLojas)
    .get("/lojas/:id", LojaController.listarLojaPorId)
    .post("/lojas", LojaController.cadastrarLoja)
    .put("/lojas/:id", LojaController.atualizarLoja)
    .delete("/lojas/:id", LojaController.excluirLoja)

    
export default router;