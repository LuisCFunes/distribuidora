import axios from "axios";

export interface Ordenes {
  ID_Orden: number;
  Fecha_Orden: string;
  ID_Proovedor: number;
}

export const getOrdenes = async (): Promise<Ordenes[]> => {
  const { data } = await axios.get<Ordenes[]>("http://localhost:3000/ordenes");
  return data;
};
