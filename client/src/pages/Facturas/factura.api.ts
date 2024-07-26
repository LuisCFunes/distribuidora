import axios from "axios";

export interface Factura {
    ID_Factura: number;
    Subtotal: number;
    Impuesto: number;
    Total: number;
    ID_Cliente: string;
    ID_Empleado: string;
    ID_Articulo: number;
}

export const getFacturas = async (): Promise<Factura[]> => {
    const { data } = await axios.get<Factura[]>("http://localhost:3000/facturas");
    return data;
}

export const editFactura = async (
    id: number,
    updatedData: Partial<Factura>
  ): Promise<Factura> => {
    const { data } = await axios.put<Factura>(
      `http://localhost:3000/facturas/${id}`,
      updatedData
    );
    return data;
  };
  
  export const deleteFactura = async (id: number): Promise<Factura> => {
    const { data } = await axios.delete<Factura>(
      `http://localhost:3000/facturas/${id}`
    );
    return data;
  };