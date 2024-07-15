export interface Empleados {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
}

export declare const getEmpleados: () => Promise<Empleados[]>;
