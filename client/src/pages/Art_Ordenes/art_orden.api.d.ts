export interface Art_Ordenes {
    ID_ArtOrdenes: number;
    ID_Articulo: string;
    ID_Orden: number;
}

export declare const getOrdenes: () => Promise<Art_Ordenes[]>;
