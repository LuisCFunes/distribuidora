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

router.get("/bodegas/:ID_Bodega", getBodega);

router.post("/bodegas", createBodega);

router.put("/bodegas/:ID_Bodega", updateBodega);

router.delete("/bodegas/:ID_Bodega", deleteBodega);

export default router;