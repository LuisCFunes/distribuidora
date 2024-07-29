import { useEffect, useState } from "react";
import {
  getClientes,
  Cliente,
  deleteCliente,
  editCliente,
} from "../Clientes/cliente.api";
import Table from "../../components/Table";

function ClientesTable() {
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

  const handleDelete = async (item: Cliente) => {
    try {
      const deletedItem = await deleteCliente(item.ID_Cliente);
      setData((prevData) =>
        prevData.filter(
          (cliente) => cliente.ID_Cliente !== deletedItem.ID_Cliente
        )
      );
      fetchData();
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);
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
      onDelete={handleDelete}
    />
  );
}

export default ClientesTable;
