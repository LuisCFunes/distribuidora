import { useEffect, useState } from "react";
import {
  getArticulos,
  editArticulo,
  deleteArticulo,
  Articulo,
} from "./articulo.api";
import Table from "../../components/Table";

function ArticulosTable() {
  const [data, setData] = useState<Articulo[]>([]);

  async function fetchData() {
    try {
      const result = await getArticulos();
      const formattedResult = result.map((item) => ({ ...item, id: item.ID_Articulo }));
      setData(formattedResult);
    } catch (error) {
      console.error("Error al obtener los proveedores:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (item: Articulo) => {
    try {
      const updatedArticulo = await editArticulo(item.ID_Articulo, item);
      setData((prevData) =>
        prevData.map((articulo) =>
          articulo.ID_Articulo === updatedArticulo.ID_Articulo
            ? updatedArticulo
            : articulo
        )
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar el artículo:", error);
    }
  };

  const handleDelete = async (item: Articulo) => {
    try {
      await deleteArticulo(item.ID_Articulo);
      setData((prevData) =>
        prevData.filter((articulo) => articulo.ID_Articulo !== item.ID_Articulo)
      );
    } catch (error) {
      console.error("Error al eliminar el artículo:", error);
    }
  };

  const columns = [
    { key: "ID_Articulo", label: "ID" },
    { key: "Nom_Articulo", label: "Nombre" },
    { key: "Tipo_Articulo", label: "Tipo" },
    { key: "Marca_Articulo", label: "Marca" },
    { key: "ID_Bodega", label: "NO_Bodega" },
    { key: "Precio", label: "Precio" },
  ];

  return (
    <Table
      data={data}
      columns={columns}
      title="Articulos"
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}

export default ArticulosTable;