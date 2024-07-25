import axios from "axios";

export interface Ordenes {
  ID_Orden: number;
  Fecha_Orden: string;
  ID_proveedor: number;
}

export const getOrdenes = async (): Promise<Ordenes[]> => {
  const { data } = await axios.get<Ordenes[]>("http://localhost:3000/ordenes");
  return data;
};

export const editOrdenes = async (
  id: number,
  updatedData: Partial<Ordenes>
): Promise<Ordenes> => {
  const { data } = await axios.put<Ordenes>(
    `http://localhost:3000/ordenes/${id}`,
    updatedData
  );
  return data;
};

export const deleteOrdenes = async (id: number): Promise<Ordenes> => {
  const { data } = await axios.delete<Ordenes>(
    `http://localhost:3000/ordenes/${id}`
  );
  return data;
};