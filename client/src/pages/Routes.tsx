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
          path: "/facturas",
          element: <FacturasTabla />,
        },
        {
          path: "/bodegas",
          element: <BodegaTable />,
        },
        {
          path: "/empleados",
          element: <EmpleadosTable />,
        },
        {
          path: "/proovedores",
          element: <ProovedoresTable />,
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
