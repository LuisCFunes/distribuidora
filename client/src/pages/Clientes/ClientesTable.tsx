import { useEffect, useState } from "react";
import { getClientes, Cliente, deleteCliente, editCliente } from "../Clientes/cliente.api";
import Table from "../../components/Table";

function ClientesTable() {
  const [data, setData] = useState<Cliente[]>([]);

  async function fetchData() {
    try {
      const result = await getClientes();
      setData(result);
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
      await deleteCliente(item.ID_Cliente);
      setData((prevData) =>
        prevData.filter((cliente) => cliente.ID_Cliente !== item.ID_Cliente)
      );
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);
    }
  };

  const columns = [
    { key: "ID_Cliente", label: "ID" },
    { key: "nom_cliente", label: "Nombre" },
    { key: "ape_cliente", label: "Apellido" },
    { key: "tel_cliente", label: "Telefono" },
  ];

  return <Table data={data} columns={columns} title="Clientes" onEdit={handleEdit} onDelete={handleDelete} />;
}

export default ClientesTable;