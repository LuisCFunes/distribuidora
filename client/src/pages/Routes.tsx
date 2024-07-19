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
import ProovedoresTable from "./Proovedores/ProovedoresTable";
import ArticulosTable from "./Articulos/ArticulosTable";
import OrdenesTable from "./Ordenes/OrdenesTable";
import ArituculosForm from "./Articulos/ArticulosForm";
import BodegaForm from "./Bodegas/BodegaForm";
import ClientesForm from "./Clientes/ClientesForm";

function Routes() {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "*",
      element: <NotFound />,
    },
  ];

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
          path: "/proovedores",
          element: <ProovedoresTable />,
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
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
