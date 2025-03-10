import { useEffect, useState } from "react";
import { deleteArtOrdenes,editArtOrdenes, getArtOrdenes, ArtOrdenes } from "./art_orden.api";
import Table from "../../components/Table";

function Art_OrdenesTable() {
  const [data, setData] = useState<ArtOrdenes[]>([]);

  async function fetchData() {
    try{
      const result = await getArtOrdenes();
      const formattedResult = result.map((item) => ({ ...item, id: item.ID }));
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
    { key: "ID", label: "ID" },
    { key: "ID_Articulo", label: "Articulo" },
    { key: "ID_Orden", label: "Orden" },
  ];

  
  const handleEdit = async (item: ArtOrdenes) => {
    try {
      const update = await editArtOrdenes(item.ID, item);
      const formattedUpdateProveedor = { ...update, id: update.ID };
      setData((prevData) =>
        prevData.map((ordenes) =>
          ordenes.ID === formattedUpdateProveedor.id
            ? formattedUpdateProveedor
            : ordenes
        )
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar la orden:", error);
    }
  };

  const handleDelete = async (item: ArtOrdenes) => {
    try {
      await deleteArtOrdenes(item.ID);
      setData((prevData) =>
        prevData.filter((ordenes) => ordenes.ID !== item.ID)
      );
    } catch (error) {
      console.error("Error al eliminar la orden:", error);
    }
  };
  return <Table data={data} columns={columns} title="Ordenes" onEdit={handleEdit} onDelete={handleDelete} />;
}

export default Art_OrdenesTable;
