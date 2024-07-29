import axios from "axios";

export interface Cliente {
  ID_Cliente: number;
  Nom_Cliente: string;
  Ape_Cliente: string;
  Tel_Cliente: string;
}

export const getClientes = async (): Promise<Cliente[]> => {
  const { data } = await axios.get<Cliente[]>("http://localhost:3000/clientes");
  return data;
};

export const createCliente = async (): Promise<Cliente[]> => {
  const { data } = await axios.post<Cliente[]>(
    "http://localhost:3000/clientes"
  );
  return data;
};

export const editCliente = async (
  id: number,
  updatedData: Partial<Cliente>
): Promise<Cliente> => {
  const { data } = await axios.put<Cliente>(
    `http://localhost:3000/clientes/${id}`,
    updatedData
  );
  return data;
};

export const deleteCliente = async (id: number): Promise<Cliente> => {
  const { data } = await axios.delete<Cliente>(
    `http://localhost:3000/clientes/${id}`
  );
  return data;
};
