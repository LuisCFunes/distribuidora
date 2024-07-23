import { Link } from 'react-router-dom'

function NavFormsCajero() {
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
    </div>
  )
}

export default NavFormsCajero