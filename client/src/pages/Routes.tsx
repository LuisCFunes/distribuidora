import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../context/ContextToken";
import ProtegerRutas from "../ProtegerRutas";
import Login from "./Login";
import NotFound from "./NotFound";
import Home from "./Home";
import ClientesTable from "./ClientesTable";
import FacturasTabla from "./FacturasTable";

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
