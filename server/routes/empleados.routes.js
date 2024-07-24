import { Router } from "express";
import {
    getEmpleados,
    getEmpleado,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
} from "../controllers/empleados.controller.js";

const router = Router();

router.get("/empleados", getEmpleados);

router.get("/empleados/:ID_Empleado", getEmpleado);

router.post("/empleados", createEmpleado);

router.put("/empleados/:ID_Empleado", updateEmpleado);

router.delete("/empleados/:ID_Empleado", deleteEmpleado);

export default router;