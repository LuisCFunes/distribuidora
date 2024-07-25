export interface proveedores {
    id: number;
    nombre: string;
    ubicacion: string;
}

export declare const getproveedores: () => Promise<proveedores[]>;
