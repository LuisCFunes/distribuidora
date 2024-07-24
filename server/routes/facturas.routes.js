import { Router } from "express";
import {
    getFacturas,
    getFactura,
    createFactura,
    updateFactura,
    deleteFactura,
} from "../controllers/facturas.controller.js";

const router = Router();

router.get("/facturas", getFacturas);

router.get("/facturas/:ID_Factura", getFactura);

router.post("/facturas", createFactura);

router.put("/facturas/:ID_Factura", updateFactura);

router.delete("/facturas/:ID_Factura", deleteFactura);

export default router;