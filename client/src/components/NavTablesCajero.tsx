import { Link } from "react-router-dom";

function NavTablesCajero() {
  return (
    <div className="mt-8 w-[60vw] grid grid-cols-auto text-center gap-4 ">
      <Link
        to="/clientes"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ver Clientes
      </Link>
      <Link
        to="/facturas"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ver Facturas
      </Link>

      <Link
        to="/articulos"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ver Articulos
      </Link>
    </div>
  );
}

export default NavTablesCajero;
