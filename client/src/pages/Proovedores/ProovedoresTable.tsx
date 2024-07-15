import { useEffect, useState } from "react";
import { getProovedores, Proovedores } from "../Proovedores/proovedores.api";
import Table from "../../components/Table";

function ProovedoresTable() {
  const [data, setData] = useState<Proovedores[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getProovedores();
      setData(result);
    }
    fetchData();
  }, []);

  const columns = [
    { key: "ID_Proovedor", label: "ID" },
    { key: "Nom_Proovedor", label: "Nombre" },
    { key: "Ubi_Proovedor", label: "Ubicacion" },
  ];
  return <Table data={data} columns={columns} title="Proovedores" />;
}

export default ProovedoresTable;
