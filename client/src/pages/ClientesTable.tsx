import { useEffect, useState } from "react";
import { getClientes, Cliente } from "../api/cliente.api";
import BotonHome from "../BotonHome";

function ClientesForm() {
  const [data, setData] = useState<Cliente[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getClientes();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <BotonHome />
      <h1 className="text-2xl font-bold text-center">Clientes</h1>
      <table className="table table-zebra w-[80%] mx-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ID_Cliente}>
              <td>{item.ID_Cliente}</td>
              <td>{item.nom_cliente}</td>
              <td>{item.ape_cliente}</td>
              <td>{item.tel_cliente}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientesForm;
