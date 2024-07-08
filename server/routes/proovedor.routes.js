import { Router } from "express";
import {
    getProovedor,
    getProovedores,
    createProovedor,
    updateProovedor,
    deleteProovedor,
} from "../controllers/proovedor.controller.js";

const router = Router();

router.get("/proovedor", getProovedores);

router.get("/proovedor/:id", getProovedor);

router.post("/proovedor", createProovedor);

router.put("/proovedor/:id", updateProovedor);

router.delete("/proovedor/:id", deleteProovedor);

export default router;