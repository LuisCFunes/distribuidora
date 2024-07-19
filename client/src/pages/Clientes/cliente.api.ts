import axios from "axios";

export interface Cliente {
    ID_Cliente: number;
    nom_cliente: string;
    ape_cliente: string;
    tel_cliente: string;
}

export const getClientes = async (): Promise<Cliente[]> => {
    const { data } = await axios.get<Cliente[]>("http://localhost:3000/clientes");
    return data;
}

export const createCliente = async (): Promise<Cliente[]> => {
    const { data } = await axios.post<Cliente[]>("http://localhost:3000/clientes");
    return data;
}
