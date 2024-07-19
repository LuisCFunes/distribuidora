import axios from "axios";

export interface Bodega {
  ID_Bodega: number;
  Ubi_Bodega: string;
  Num_Bodega: number;
}

export const getBodegas = async (): Promise<Bodega[]> => {
  const { data } = await axios.get<Bodega[]>("http://localhost:3000/bodegas");
  return data;
};

export const createBodega = async (): Promise<Bodega[]> => {
  const { data } = await axios.post<Bodega[]>("http://localhost:3000/bodegas");
  return data;
};
