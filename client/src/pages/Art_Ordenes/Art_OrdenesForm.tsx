import { useForm } from "react-hook-form";
import { ArtOrdenes } from "./art_orden.api";
import { getArticulos, Articulo } from "../Articulos/articulo.api";
import { getOrdenes, Ordenes } from "../Ordenes/orden.api";
import usePost from "../../hooks/usePost";
import BotonHome from "../../components/BotonHome";
import { useEffect, useState } from "react";

function OrdenesForm() {
  const { register, handleSubmit, reset } = useForm<ArtOrdenes>();
  const { postData } = usePost();
  const [dataArticulos, setDataArticulos] = useState<Articulo[]>([]);
  const [dataOrdenes, setDataOrdenes] = useState<Ordenes[]>([]);

  async function fetchArticulos() {
    try {
      const result = await getArticulos();
      const formattedResult = result.map((item) => ({
        ...item,
        id: item.ID_Articulo,
      }));
      setDataArticulos(formattedResult);
    } catch (error) {
      console.error("Error al obtener las articulos_ordenes:", error);
    }
  }

  async function fetchOrdenes() {
    try {
      const result = await getOrdenes();
      const formattedResult = result.map((item) => ({
        ...item,
        id: item.ID_Orden,
      }));
      setDataOrdenes(formattedResult);
    } catch (error) {
      console.error("Error al obtener las articulos_ordenes:", error);
    }
  }

  useEffect(() => {
    fetchArticulos();
    fetchOrdenes();
  }, []);

  const handleSubmitData = (data: ArtOrdenes) => {
    postData(data, "articulo_ordenes");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitData)}
      className="grid grid-rows-3 gap-4 mx-auto my-10 w-[40%]"
    >
      <select className="w-full p-4" required {...register("ID_Articulo")}>
        <option value="">Selecciona un artículo</option>
        {dataArticulos.map((item) => (
          <option key={item.ID_Articulo} value={item.ID_Articulo}>
            {item.ID_Articulo}
          </option>
        ))}
      </select>

      <select className="w-full p-4" required {...register("ID_Orden")}>
        <option value="">Selecciona una orden</option>
        {dataOrdenes.map((item) => (
          <option key={item.ID_Orden} value={item.ID_Orden}>
            {item.ID_Orden}
          </option>
        ))}
      </select>
      <input
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        value="Enviar"
      />
      <BotonHome />
    </form>
  );
}

export default OrdenesForm;
