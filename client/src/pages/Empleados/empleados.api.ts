import axios from "axios";

export interface Empleados {
  ID_Empleado: number;
  Nom_Empleado: string;
  Ape_Empleado: string;
}

export const getEmpleados = async (): Promise<Empleados[]> => {
  const { data } = await axios.get<Empleados[]>(
    "http://localhost:3000/empleados"
  );
  return data;
};

export const createEmpleados = async (data: Empleados) => {
  axios
    .post("http://localhost:3000/empleados", data)
    .then((response) => {
      alert("Datos enviados");
      console.log(response);
    })
    .catch((error) => {
      alert("Error al enviar datos");
      console.error(error);
    });
};

export const editEmpleado = async (
  id: number,
  updatedData: Partial<Empleados>
): Promise<Empleados> => {
  const { data } = await axios.put<Empleados>(
    `http://localhost:3000/empleados/${id}`,
    updatedData
  );
  return data;
};

export const deleteEmpleado = async (id: number): Promise<Empleados> => {
  const { data } = await axios.delete<Empleados>(
    `http://localhost:3000/empleados/${id}`
  );
  return data;
};