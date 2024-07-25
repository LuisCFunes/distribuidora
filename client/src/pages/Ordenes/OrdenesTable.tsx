import { useEffect, useState } from "react";
import { getOrdenes, Ordenes, deleteOrdenes, editOrdenes } from "./orden.api";
import Table from "../../components/Table";
import { useFormatearFecha } from "../../hooks/useFormatearFecha";

function OrdenesTable() {
  const [data, setData] = useState<Ordenes[]>([]);
  const { formatDate } = useFormatearFecha();

  async function fetchData() {
    const result = await getOrdenes();
    const formattedData = result.map((orden) => ({
      ...orden,
      Fecha_Orden: formatDate(orden.Fecha_Orden),
    }));
    setData(formattedData);
  }

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { key: "ID_Orden", label: "ID" },
    { key: "Fecha_Orden", label: "Fecha" },
    { key: "ID_proveedor", label: "proveedor" },
  ];

  
  const handleEdit = async (item: Ordenes) => {
    try {
      const update = await editOrdenes(item.ID_Orden, item);
      setData((prevData) =>
        prevData.map((x) => (x.ID_Orden === update.ID_Orden ? update : x))
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar la bodega:", error);
    }
  };

  const handleDelete = async (item: Ordenes) => {
    try {
      const deleteItem = await deleteOrdenes(item.ID_Orden);
      setData((prevData) =>
        prevData.map((x) =>
          x.ID_Orden === deleteItem.ID_Orden ? deleteItem : x
        )
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar la bodega:", error);
    }
  };
  return <Table data={data} columns={columns} title="Ordenes" onEdit={handleEdit} onDelete={handleDelete} />;
}

export default OrdenesTable;
