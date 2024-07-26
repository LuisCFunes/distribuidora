import { useEffect, useState } from "react";
import { getOrdenes, Ordenes, deleteOrdenes, editOrdenes } from "./orden.api";
import Table from "../../components/Table";
import { useFormatearFecha } from "../../hooks/useFormatearFecha";

function OrdenesTable() {
  const [data, setData] = useState<Ordenes[]>([]);
  const { formatDate } = useFormatearFecha();

  async function fetchData() {
    try{
      const result = await getOrdenes();
      const formattedData = result.map((orden) => ({
        ...orden,
        Fecha_Orden: formatDate(orden.Fecha_Orden),
      }));
      const formattedResult = formattedData.map((item) => ({ ...item, id: item.ID_Orden }));
      setData(formattedResult);
    }
    catch (error) {
      console.error("Error al obtener las ordenes:", error);
    }
   
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  const columns = [
    { key: "ID_Orden", label: "ID" },
    { key: "Fecha_Orden", label: "Fecha" },
    { key: "ID_Proveedor", label: "Proveedor" },
  ];

  
  const handleEdit = async (item: Ordenes) => {
    try {
      const update = await editOrdenes(item.ID_Orden, item);
      const formattedUpdateProveedor = { ...update, id: update.ID_Orden };
      setData((prevData) =>
        prevData.map((ordenes) =>
          ordenes.ID_Orden === formattedUpdateProveedor.id
            ? formattedUpdateProveedor
            : ordenes
        )
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar la orden:", error);
    }
  };

  const handleDelete = async (item: Ordenes) => {
    try {
      await deleteOrdenes(item.ID_Orden);
      setData((prevData) =>
        prevData.filter((proveedor) => proveedor.ID_Orden !== item.ID_Orden)
      );
    } catch (error) {
      console.error("Error al eliminar la orden:", error);
    }
  };
  return <Table data={data} columns={columns} title="Ordenes" onEdit={handleEdit} onDelete={handleDelete} />;
}

export default OrdenesTable;
