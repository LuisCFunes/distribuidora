import { Router } from "express";
import {
  getCliente,
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente,
} from "../controllers/clientes.controller.js";

const router = Router();

router.get("/clientes", getClientes);

router.get("/clientes/:id", getCliente);

router.post("/clientes", createCliente);

router.put("/clientes/:ID_Cliente", updateCliente);

router.delete("/clientes/:ID_Cliente", deleteCliente);

export default router;