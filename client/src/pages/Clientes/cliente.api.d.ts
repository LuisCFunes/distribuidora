export interface Cliente {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
}

export declare const getClientes: () => Promise<Cliente[]>;
