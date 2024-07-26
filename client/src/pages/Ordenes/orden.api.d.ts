export interface Ordenes {
    ID: number;
    Fecha: string;
    ID_Proveedor: number;
    ID_Articulo: number;
}

export declare const getOrdenes: () => Promise<Ordenes[]>;
