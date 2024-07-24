import { useEffect, useState } from "react";
import {
  getEmpleados,
  Empleados,
  editEmpleado,
  deleteEmpleado
} from "../Empleados/empleados.api";
import Table from "../../components/Table";

function EmpleadosTable() {
  const [data, setData] = useState<Empleados[]>([]);

  async function fetchData() {
    const result = await getEmpleados();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (item: Empleados) => {
    try {
      const update = await editEmpleado(item.ID_Empleado, item);
      setData((prevData) =>
        prevData.map((x) => (x.ID_Empleado === update.ID_Empleado ? update : x))
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar la bodega:", error);
    }
  };

  const handleDelete = async (item: Empleados) => {
    try {
      const deleteItem = await deleteEmpleado(item.ID_Empleado);
      setData((prevData) =>
        prevData.map((x) =>
          x.ID_Empleado === deleteItem.ID_Empleado ? deleteItem : x
        )
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar la bodega:", error);
    }
  };

  const columns = [
    { key: "ID_Empleado", label: "ID" },
    { key: "Nom_Empleado", label: "Nombre" },
    { key: "Ape_Empleado", label: "Apellido" },
    { key: "Tel_Empleado", label: "Telefono" },
  ];

  return <Table data={data} columns={columns} title="Empleados" onEdit={handleEdit} onDelete={handleDelete} />;
}

export default EmpleadosTable;
