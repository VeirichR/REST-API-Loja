import express from "express";
import ProdutoController from "../controllers/produtosController.js";

const router = express.Router();

router
    .get("/produtos", ProdutoController.listarProdutos)
    .get("/produtos/:id", ProdutoController.listarProdutosPorId)
    .post("/produtos", ProdutoController.cadastrarProdutos)
    .put("/produtos/:id", ProdutoController.atualizarProdutos)
    .delete("/produtos/:id", ProdutoController.excluirProdutos)

export default router;