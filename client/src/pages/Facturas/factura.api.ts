import axios from "axios";

export interface Factura {
    ID_Factura: number;
    Subtotal: number;
    Impuesto: number;
    Total: number;
    ID_Cliente: number;
    ID_Empleado: number;
}

export const getFacturas = async (): Promise<Factura[]> => {
    const { data } = await axios.get<Factura[]>("http://localhost:3000/facturas");
    return data;
}
