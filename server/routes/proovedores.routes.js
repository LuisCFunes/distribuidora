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

router.get("/proovedores/:id", getProovedor);

router.post("/proovedores", createProovedor);

router.put("/proovedores/:id", updateProovedor);

router.delete("/proovedores/:id", deleteProovedor);

export default router;