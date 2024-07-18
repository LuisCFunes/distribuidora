export interface Articulo {
    ID: number;
    Nombre: string;
    Tipo: number;
    Marca: string;
    ID_Factura: number;
    ID_Bodega: number;
    Precio:number;
}

export declare const getArticulos: () => Promise<Articulo[]>;
