import { useEffect, useState } from "react";
import { getClientes, Cliente } from "../Clientes/cliente.api";
import Table from "../../components/Table";

function ClientesTable() {
  const [data, setData] = useState<Cliente[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getClientes();
      setData(result);
    }
    fetchData();
  }, []);

  const columns = [
    { key: "ID_Cliente", label: "ID" },
    { key: "nom_cliente", label: "Nombre" },
    { key: "ape_cliente", label: "Apellido" },
    { key: "tel_cliente", label: "Telefono" },
  ];

  return <Table data={data} columns={columns} title="Clientes" />;
}

export default ClientesTable;
