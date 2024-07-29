import axios from "axios";

export interface Bodega {
  ID_Bodega: number;
  Ubi_Bodega: string;
  Nom_Bodega: string;
}

export const getBodegas = async (): Promise<Bodega[]> => {
  const { data } = await axios.get<Bodega[]>("http://localhost:3000/bodegas");
  return data;
};

export const createBodega = async (): Promise<Bodega[]> => {
  const { data } = await axios.post<Bodega[]>("http://localhost:3000/bodegas");
  return data;
};

export const editBodega = async (
  id: number,
  updatedData: Partial<Bodega>
): Promise<Bodega> => {
  const { data } = await axios.put<Bodega>(
    `http://localhost:3000/bodegas/${id}`,
    updatedData
  );
  return data;
};

export const deleteBodega = async (id: number): Promise<Bodega> => {
  const { data } = await axios.delete<Bodega>(
    `http://localhost:3000/bodegas/${id}`
  );
  return data;
};