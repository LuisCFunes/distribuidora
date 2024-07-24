import { Router } from "express";
import {
    getArticulos,
    getArticulo,
    createArticulo,
    updateArticulo,
    deleteArticulo
} from "../controllers/articulos.controller.js";

const router = Router();

router.get("/articulos", getArticulos);

router.get("/articulos/:id", getArticulo);

router.post("/articulos", createArticulo);

router.put("/articulos/:ID_Articulo", updateArticulo);

router.delete("/articulos/:ID_Articulo", deleteArticulo);

export default router;