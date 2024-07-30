import axios from "axios";

export interface ArtOrdenes {
  ID: number;
  ID_Orden: number;
  ID_Articulo: number;
}

export const getArtOrdenes = async (): Promise<ArtOrdenes[]> => {
  const { data } = await axios.get<ArtOrdenes[]>("http://localhost:3000/articulo_ordenes");
  return data;
};

export const editArtOrdenes = async (
  id: number,
  updatedData: Partial<ArtOrdenes>
): Promise<ArtOrdenes> => {
  const { data } = await axios.put<ArtOrdenes>(
    `http://localhost:3000/articulo_ordenes/${id}`,
    updatedData
  );
  return data;
};

export const deleteArtOrdenes = async (id: number): Promise<ArtOrdenes> => {
  const { data } = await axios.delete<ArtOrdenes>(
    `http://localhost:3000/articulo_ordenes/${id}`
  );
  return data;
};