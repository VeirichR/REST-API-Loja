import express from "express";
import produtos from "./produtoRoutes.js";
import lojas from "./lojaRoutes.js"


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Testando"});
    })
    app.use(
        express.json(),
        produtos,
        lojas
    )
}

export default routes;