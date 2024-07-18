import { useEffect, useState } from "react";
import { getArticulos, Articulo } from "./articulo.api";
import Table from "../../components/Table";

function ArticulosTable() {
  const [data, setData] = useState<Articulo[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getArticulos();
      setData(result);
    }
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

  return <Table data={data} columns={columns} title="Articulos" />;
}

export default ArticulosTable;
