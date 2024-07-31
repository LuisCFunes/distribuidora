import { useEffect, useState } from "react";
import {
  getArticulos,
  Articulo,
} from "./articulo.api";
import Table from "../../components/Table";

function ArticulosTableCajero() {
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
    />
  );
}

export default ArticulosTableCajero;