import axios from "axios";

export interface Articulo {
  ID_Articulo: number;
  Nom_Articulo: string;
  Tipo_Articulo: string;
  Marca_Articulo: string;
  ID_Factura: number;
  ID_Bodega: number;
  Precio: number;
}

export const getArticulos = async (): Promise<Articulo[]> => {
  const { data } = await axios.get<Articulo[]>(
    "http://localhost:3000/articulos"
  );
  return data;
};

export const createArticulo = async (): Promise<Articulo[]> => {
  const { data } = await axios.post<Articulo[]>(
    "http://localhost:3000/articulos"
  );
  return data;
};
