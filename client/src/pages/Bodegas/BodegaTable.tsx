import { useEffect, useState } from "react";
import { getBodegas, Bodega, editBodega, deleteBodega } from "./bodega.api";
import Table from "../../components/Table";

function BodegaTable() {
  const [data, setData] = useState<Bodega[]>([]);

  async function fetchData() {
    try {
      const result = await getBodegas();
      const formattedResult = result.map((item) => ({ ...item, id: item.ID_Bodega }));
      setData(formattedResult);
    } catch (error) {
      console.error("Error al obtener las bodegas:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (item: Bodega) => {
    try {
      const update = await editBodega(item.ID_Bodega, item);
      setData((prevData) =>
        prevData.map((x) =>
          x.ID_Bodega === update.ID_Bodega
            ? update
            : x
        )
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar la bodega:", error);
    }
  };

  const handleDelete = async (item: Bodega) => {
    try {
      const deleteItem = await deleteBodega(item.ID_Bodega);
      setData((prevData) =>
        prevData.map((x) =>
          x.ID_Bodega === deleteItem.ID_Bodega ? deleteItem : x
        )
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar la bodega:", error);
    }
  };

  const columns = [
    { key: "ID_Bodega", label: "ID" },
    { key: "Ubi_Bodega", label: "Ubicacion" },
    { key: "Num_Bodega", label: "Numero" },
  ];

  return <Table data={data} columns={columns} title="Bodegas" onEdit={handleEdit} onDelete={handleDelete} />;
}

export default BodegaTable;
