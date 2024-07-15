import { Router } from "express";
import {
    getBodegas,
    getBodega,
    createBodega,
    updateBodega,
    deleteBodega,
} from "../controllers/bodegas.controller.js";

const router = Router();

router.get("/bodegas", getBodegas);

router.get("/bodegas/:id", getBodega);

router.post("/bodegas", createBodega);

router.put("/bodegas/:id", updateBodega);

router.delete("/bodegas/:id", deleteBodega);

export default router;