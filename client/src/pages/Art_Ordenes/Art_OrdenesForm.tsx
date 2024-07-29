import { useForm } from "react-hook-form";
import { ArtOrdenes, getArtOrdenes } from "./art_orden.api";
import usePost from "../../hooks/usePost";
import BotonHome from "../../components/BotonHome";
import { useEffect, useState } from "react";

function OrdenesForm() {
  const { register, handleSubmit, reset } = useForm<ArtOrdenes>();
  const { postData } = usePost();
  const [data, setData] = useState<ArtOrdenes[]>([]);

  async function fetchData() {
    try{
      const result = await getArtOrdenes();
      const formattedResult = result.map((item) => ({ ...item, id: item.ID_ArtOrdenes }));
      setData(formattedResult);
    }
    catch (error) {
      console.error("Error al obtener las articulos_ordenes:", error);
    }
  }

  useEffect(() => {
    fetchData();
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
      <input
        className="w-full p-4"
        required
        type="number"
        placeholder="No_Orden"
        {...register("ID_Orden")}
      />

     <select
        className="w-full p-4"
        required
        {...register("ID_Articulo")}
      >
        <option value="">Selecciona un artículo</option>
        {data.map(item => (
          <option key={item.ID_ArtOrdenes} value={item.ID_Articulo}>
            {item.ID_Articulo}
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
