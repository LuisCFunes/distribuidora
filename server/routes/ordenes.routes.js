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

router.get("/ordenes/:id", getOrden);

router.post("/ordenes", createOrden);

router.put("/ordenes/:id", updateOrden);

router.delete("/ordenes/:id", deleteOrden);

export default router;