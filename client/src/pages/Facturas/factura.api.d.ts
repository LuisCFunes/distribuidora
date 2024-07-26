export interface Factura {
    id: number;
    subtotal: number;
    impuesto: number;
    total: number;
    cliente: number;
    empleado: number;
    articulo: number;
}

export declare const getFacturas: () => Promise<Factura[]>;
