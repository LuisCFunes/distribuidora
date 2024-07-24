import axios from "axios";

export interface Proovedores {
  ID_Proovedor: number;
  Nom_Proovedor: string;
  Ubi_Proovedor: string;
}

export const getProovedores = async (): Promise<Proovedores[]> => {
  const { data } = await axios.get<Proovedores[]>(
    "http://localhost:3000/proovedores"
  );
  return data;
};

export const editProovedores = async (
  id: number,
  updatedData: Partial<Proovedores>
): Promise<Proovedores> => {
  const { data } = await axios.put<Proovedores>(
    `http://localhost:3000/proovedores/${id}`,
    updatedData
  );
  return data;
};

export const deleteProovedores = async (id: number): Promise<Proovedores> => {
  const { data } = await axios.delete<Proovedores>(
    `http://localhost:3000/proovedores/${id}`
  );
  return data;
};