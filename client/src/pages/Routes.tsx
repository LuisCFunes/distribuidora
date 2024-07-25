import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../context/ContextToken";
import ProtegerRutas from "../components/ProtegerRutas";
import Login from "./Login";
import NotFound from "./NotFound";
import Home from "./Home";
import ClientesTable from "./Clientes/ClientesTable";
import FacturasTabla from "./Facturas/FacturasTable";
import BodegaTable from "./Bodegas/BodegaTable";
import EmpleadosTable from "./Empleados/EmpleadosTable";
import ProveedoresTable from "./Proveedores/ProveedoresTable";
import ArticulosTable from "./Articulos/ArticulosTable";
import OrdenesTable from "./Ordenes/OrdenesTable";
import ArituculosForm from "./Articulos/ArticulosForm";
import BodegaForm from "./Bodegas/BodegaForm";
import ClientesForm from "./Clientes/ClientesForm";
import EmpleadosForm from "./Empleados/EmpleadosForm";
import FacturasForm from "./Facturas/FacturasForm";
import OrdenesForm from "./Ordenes/OrdenesForm";
import ProveedoresForm from "./Proveedores/ProveedoresForm";
import HomeCajero from "./HomeCajero";

function Routes() {
  const { token } = useAuth();

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtegerRutas />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cajero",
          element: <HomeCajero />,
        },
        {
          path: "/clientes",
          element: <ClientesTable />,
        },
        {
          path: "/clientes/form",
          element: <ClientesForm />,
        },
        {
          path: "/facturas",
          element: <FacturasTabla />,
        },
        {
          path: "/facturas/form",
          element: <FacturasForm />,
        },
        {
          path: "/bodegas",
          element: <BodegaTable />,
        },
        {
          path: "/bodegas/form",
          element: <BodegaForm />,
        },
        {
          path: "/empleados",
          element: <EmpleadosTable />,
        },
        {
          path: "/empleados/form",
          element: <EmpleadosForm />,
        },
        {
          path: "/proveedores",
          element: <ProveedoresTable />,
        },
        {
          path: "/proveedores/form",
          element: <ProveedoresForm />,
        },
        {
          path: "/articulos",
          element: <ArticulosTable />,
        },
        {
          path: "/articulos/form",
          element: <ArituculosForm />,
        },
        {
          path: "/ordenes",
          element: <OrdenesTable />,
        },
        {
          path: "/ordenes/form",
          element: <OrdenesForm />,
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <Login />,
      errorElement: <NotFound />,
    },
  ];

  const router = createBrowserRouter([
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
