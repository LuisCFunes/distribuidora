import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-4 text-center">Home</h1>
      <div className="mt-8 text-center">
        <Link
          to="/clientes"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          Ver Clientes
        </Link>
        <Link
          to="/facturas"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver Facturas
        </Link>
      </div>
    </div>
  );
}

export default Home;
