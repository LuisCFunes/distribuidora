export interface Ordenes {
    ID: number;
    Fecha: string;
    ID_Proveedor: number;
}

export declare const getOrdenes: () => Promise<Ordenes[]>;
