import { useEffect, useState } from "react";
import { getOrdenes, Ordenes } from "./orden.api";
import Table from "../../components/Table";
import { useFormatearFecha } from "../../hooks/useFormatearFecha";

function OrdenesTable() {
  const [data, setData] = useState<Ordenes[]>([]);
  const { formatDate } = useFormatearFecha();

  useEffect(() => {
    async function fetchData() {
      const result = await getOrdenes();
      const formattedData = result.map((orden) => ({
        ...orden,
        Fecha_Orden: formatDate(orden.Fecha_Orden),
      }));
      setData(formattedData);
    }
    fetchData();
  }, [formatDate]);

  const columns = [
    { key: "ID_Orden", label: "ID" },
    { key: "Fecha_Orden", label: "Fecha" },
    { key: "ID_Proovedor", label: "Proovedor" },
  ];

  return <Table data={data} columns={columns} title="Ordenes" />;
}

export default OrdenesTable;
