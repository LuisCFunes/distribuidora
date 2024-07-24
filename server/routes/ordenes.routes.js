import { Router } from "express";
import {
    getOrdenes,
    getOrden,
    createOrden,
    updateOrden,
    deleteOrden
} from "../controllers/ordenes.controller.js";

const router = Router();

router.get("/ordenes", getOrdenes);

router.get("/ordenes/:ID_Orden", getOrden);

router.post("/ordenes", createOrden);

router.put("/ordenes/:ID_Orden", updateOrden);

router.delete("/ordenes/:ID_Orden", deleteOrden);

export default router;