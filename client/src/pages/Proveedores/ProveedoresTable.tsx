import { useEffect, useState } from "react";
import { getproveedores, proveedores, editproveedores, deleteproveedores } from "./proovedores.api";
import Table from "../../components/Table";

function ProveedoresTable() {
  const [data, setData] = useState<proveedores[]>([]);

  async function fetchData() {
    try {
      const result = await getproveedores();
      const formattedResult = result.map((item) => ({ ...item, id: item.ID_Proveedor }));
      setData(formattedResult);
    } catch (error) {
      console.error("Error al obtener los proveedores:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (item: proveedores) => {
    try {
      const updateProveedor = await editproveedores(item.ID_Proveedor, item);
      const formattedUpdateProveedor = { ...updateProveedor, id: updateProveedor.ID_Proveedor };
      setData((prevData) =>
        prevData.map((proveedor) =>
          proveedor.ID_Proveedor === formattedUpdateProveedor.id
            ? formattedUpdateProveedor
            : proveedor
        )
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar el proveedor:", error);
    }
  };

  const handleDelete = async (item: proveedores) => {
    try {
      await deleteproveedores(item.ID_Proveedor);
      setData((prevData) =>
        prevData.filter((proveedor) => proveedor.ID_Proveedor !== item.ID_Proveedor)
      );
    } catch (error) {
      console.error("Error al eliminar el proveedor:", error);
    }
  };

  const columns = [
    { key: "ID_Proveedor", label: "ID" },
    { key: "Nom_Proveedor", label: "Nombre" },
    { key: "Ubi_Proveedor", label: "Ubicacion" },
  ];

  return <Table data={data} columns={columns} title="Proveedores" onEdit={handleEdit} onDelete={handleDelete} />;
}

export default ProveedoresTable;
