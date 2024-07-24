import { Router } from "express";
import {
    getProovedor,
    getProovedores,
    createProovedor,
    updateProovedor,
    deleteProovedor,
} from "../controllers/proovedores.controller.js";

const router = Router();

router.get("/proovedores", getProovedores);

router.get("/proovedores/:ID_Proovedor", getProovedor);

router.post("/proovedores", createProovedor);

router.put("/proovedores/:ID_Proovedor", updateProovedor);

router.delete("/proovedores/:ID_Proovedor", deleteProovedor);

export default router;