import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto mt-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Home</h1>
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
          to="/bodegas"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver Bodegas
        </Link>
        <Link
          to="/empleados"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver Empleados
        </Link>
        <Link
          to="/proovedores"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver Proovedores
        </Link>
        <Link
          to="/ordenes"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver Ordenes
        </Link>
        <Link
          to="/articulos"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver Articulos
        </Link>
      </div>
    </div>
  );
}

export default Home;
