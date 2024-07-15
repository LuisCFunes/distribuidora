import { useEffect, useState } from "react";
import { getBodegas, Bodega } from "./bodega.api";
import Table from "../../components/Table";

function BodegaTable() {
  const [data, setData] = useState<Bodega[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getBodegas();
      setData(result);
    }
    fetchData();
  }, []);

  const columns = [
    { key: "ID_Bodega", label: "ID" },
    { key: "Ubi_Bodega", label: "Ubicacion" },
    { key: "Num_Bodega", label: "Numero" },
  ];

  return <Table data={data} columns={columns} title="Bodegas" />;
}

export default BodegaTable;
