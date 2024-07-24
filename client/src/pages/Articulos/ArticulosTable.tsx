import { useEffect, useState } from "react";
import { getArticulos, editArticulo, deleteArticulo } from "./articulo.api";
import Table from "../../components/Table";

interface Articulo {
  ID_Articulo: number;
  Nom_Articulo: string;
  Tipo_Articulo: string;
  Marca_Articulo: string;
  ID_Factura: number;
  ID_Bodega: number;
  Precio: number;
}

function ArticulosTable() {
  const [data, setData] = useState<Articulo[]>([]);
  async function fetchData() {
    const result = await getArticulos();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { key: "ID_Articulo", label: "ID" },
    { key: "Nom_Articulo", label: "Nombre" },
    { key: "Tipo_Articulo", label: "Tipo" },
    { key: "Marca_Articulo", label: "Marca" },
    { key: "ID_Factura", label: "NO_Factura" },
    { key: "ID_Bodega", label: "NO_Bodega" },
    { key: "Precio", label: "Precio" },
  ];

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
      const Articulo = await deleteArticulo(item.ID_Articulo);
      setData((prevData) =>
        prevData.map((articulo) =>
          articulo.ID_Articulo === Articulo.ID_Articulo
            ? Articulo
            : articulo
        )
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar el artículo:", error);
    }
  };

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
