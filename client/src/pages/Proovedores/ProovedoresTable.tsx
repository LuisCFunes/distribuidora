import { useEffect, useState } from "react";
import { getProovedores, Proovedores, editProovedores, deleteProovedores } from "../Proovedores/proovedores.api";
import Table from "../../components/Table";

function ProovedoresTable() {
  const [data, setData] = useState<Proovedores[]>([]);
  
  async function fetchData() {
    const result = await getProovedores();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { key: "ID_Proovedor", label: "ID" },
    { key: "Nom_Proovedor", label: "Nombre" },
    { key: "Ubi_Proovedor", label: "Ubicacion" },
  ];

  const handleEdit = async (item: Proovedores) => {
    try {
      const update = await editProovedores(item.ID_Proovedor, item);
      setData((prevData) =>
        prevData.map((x) => (x.ID_Proovedor === update.ID_Proovedor ? update : x))
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar la proveedor:", error);
    }
  };

  const handleDelete = async (item: Proovedores) => {
    try {
      const deleteItem = await deleteProovedores(item.ID_Proovedor);
      setData((prevData) =>
        prevData.map((x) =>
          x.ID_Proovedor === deleteItem.ID_Proovedor ? deleteItem : x
        )
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar la proveedor:", error);
    }
  };

  return <Table data={data} columns={columns} title="Proovedores" onEdit={handleEdit} onDelete={handleDelete} />;
}

export default ProovedoresTable;
