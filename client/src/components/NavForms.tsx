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
        to="/facturas/form"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ingresar Facturas
      </Link>
      <Link
        to="/bodegas/form"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ingresar Bodegas
      </Link>
      <Link
        to="/empleados/form"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ingresar Empleados
      </Link>
      <Link
        to="/proovedores/form"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ingresar Proovedores
      </Link>
      <Link
        to="/ordenes/form"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ingresar Ordenes
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