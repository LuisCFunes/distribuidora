export interface Proovedores {
    id: number;
    nombre: string;
    ubicacion: string;
}

export declare const getProovedores: () => Promise<Proovedores[]>;
