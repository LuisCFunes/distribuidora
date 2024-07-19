import { Link } from 'react-router-dom'

function NavForms() {
  return (
    <div className="mt-8 w-[60vw] grid grid-cols-auto text-center gap-4 ">
      <Link
        to="/clientes/form"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ingresar Clientes
      </Link>
      <Link
        to="/facturas"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ver Facturas
      </Link>
      <Link
        to="/bodegas/form"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ingresar Bodegas
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
        to="/articulos/form"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ingresar Articulos
      </Link>
    </div>
  )
}

export default NavForms