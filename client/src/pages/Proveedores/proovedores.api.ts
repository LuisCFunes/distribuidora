import axios from "axios";

export interface proveedores {
  ID_Proveedor: number;
  Nom_Proveedor: string;
  Ubi_Proveedor: string;
}

export const getproveedores = async (): Promise<proveedores[]> => {
  const { data } = await axios.get<proveedores[]>(
    "http://localhost:3000/proveedores"
  );
  return data;
};

export const editproveedores = async (
  id: number,
  updatedData: Partial<proveedores>
): Promise<proveedores> => {
  const { data } = await axios.put<proveedores>(
    `http://localhost:3000/proveedores/${id}`,
    updatedData
  );
  return data;
};

export const deleteproveedores = async (id: number): Promise<proveedores> => {
  const { data } = await axios.delete<proveedores>(
    `http://localhost:3000/proveedores/${id}`
  );
  return data;
};