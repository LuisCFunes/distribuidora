import express from "express";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import clienteRoutes from "./routes/clientes.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import proveedoresRoutes from "./routes/proveedores.routes.js";
import facturasRoutes from "./routes/facturas.routes.js";
import bodegaRoutes from "./routes/bodegas.routes.js";
import ordenesRoutes from "./routes/ordenes.routes.js";
import articulosRoutes from "./routes/articulos.routes.js";
import loginRoutes from "./routes/login.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(clienteRoutes);
app.use(empleadosRoutes);
app.use(proveedoresRoutes);
app.use(facturasRoutes);
app.use(bodegaRoutes);
app.use(articulosRoutes);
app.use(ordenesRoutes);
app.use(loginRoutes)

app.use(express.static(join(__dirname, "../client/dist")));

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
