import { Router } from "express";
import {
    getArtOrdenes,
    getArticulo_Ordenes,
    createArticulo_Ordenes,
    updateArticulo_Ordenes,
    deleteArticulo_Ordenes,
} from "../controllers/articulo_ordenes.controller.js";

const router = Router();

router.get("/articulo_ordenes", getArtOrdenes);

router.get("/articulo_ordenes/:ID_ArtOrdenes", getArticulo_Ordenes);

router.post("/articulo_ordenes", createArticulo_Ordenes);

router.put("/articulo_ordenes/:ID_ArtOrdenes", updateArticulo_Ordenes);

router.delete("/articulo_ordenes/:ID_ArtOrdenes", deleteArticulo_Ordenes);

export default router;