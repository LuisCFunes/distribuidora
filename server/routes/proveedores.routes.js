import { Router } from "express";
import {
    getproveedor,
    getproveedores,
    createproveedor,
    updateproveedor,
    deleteproveedor,
} from "../controllers/proveedores.controller.js";

const router = Router();

router.get("/proveedores", getproveedores);

router.get("/proveedores/:ID_Proveedor", getproveedor);

router.post("/proveedores", createproveedor);

router.put("/proveedores/:ID_Proveedor", updateproveedor);

router.delete("/proveedores/:ID_Proveedor", deleteproveedor);

export default router;