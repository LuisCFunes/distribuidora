import { useEffect, useState } from "react";
import {
  getClientes,
  Cliente,
  editCliente,
} from "./cliente.api";
import Table from "../../components/Table";

function ClientesTableCajero() {
  const [data, setData] = useState<Cliente[]>([]);

  async function fetchData() {
    try {
      const result = await getClientes();
      const formattedResult = result.map((item) => ({
        ...item,
        id: item.ID_Cliente,
      }));
      setData(formattedResult);
    } catch (error) {
      console.error("Error al obtener los clientes:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (item: Cliente) => {
    try {
      const updatedCliente = await editCliente(item.ID_Cliente, item);
      setData((prevData) =>
        prevData.map((cliente) =>
          cliente.ID_Cliente === updatedCliente.ID_Cliente
            ? updatedCliente
            : cliente
        )
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar el cliente:", error);
    }
  };

  const columns = [
    { key: "ID_Cliente", label: "ID" },
    { key: "Nom_Cliente", label: "Nombre" },
    { key: "Ape_Cliente", label: "Apellido" },
    { key: "Tel_Cliente", label: "Telefono" },
  ];

  return (
    <Table
      data={data}
      columns={columns}
      title="Clientes"
      onEdit={handleEdit}
    />
  );
}

export default ClientesTableCajero;
