import axios from "axios";

export interface Empleados {
    ID_Empleado: number;
    Nom_Empleado: string;
    Ape_Empleado: string;
    Tel_Empleado: string;
}

export const getEmpleados = async (): Promise<Empleados[]> => {
    const { data } = await axios.get<Empleados[]>("http://localhost:3000/empleados");
    return data;
}
