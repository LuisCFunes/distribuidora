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
