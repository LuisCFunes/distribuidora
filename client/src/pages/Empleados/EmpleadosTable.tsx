import { useEffect, useState } from "react";
import { getEmpleados, Empleados } from "../Empleados/empleados.api";
import Table from "../../components/Table";

function EmpleadosTable() {
  const [data, setData] = useState<Empleados[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getEmpleados();
      setData(result);
    }
    fetchData();
  }, []);

  const columns = [
    { key: "ID_Empleado", label: "ID" },
    { key: "Nom_Empleado", label: "Nombre" },
    { key: "Ape_Empleado", label: "Apellido" },
    { key: "Tel_Empleado", label: "Telefono" },
  ];

  return <Table data={data} columns={columns} title="Empleados" />;
}

export default EmpleadosTable;
