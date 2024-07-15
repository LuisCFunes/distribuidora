export interface Bodega {
    id: number;
    Ubicacion: string;
    Numero: number;
}

export declare const getBodegas: () => Promise<Bodega[]>;
