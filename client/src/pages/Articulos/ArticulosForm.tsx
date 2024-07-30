import { useForm } from "react-hook-form";
import { Articulo } from "./articulo.api";
import { getBodegas, Bodega } from "../Bodegas/bodega.api";
import usePost from "../../hooks/usePost";
import BotonHome from "../../components/BotonHome";
import { useEffect, useState } from "react";

function ArituculosForm() {
  const { register, handleSubmit, reset } = useForm<Articulo>();
  const { postData } = usePost();
  const [dataBodegas, setDataBodegas] = useState<Bodega[]>([]);

  async function fetchBodegas() {
    try {
      const result = await getBodegas();
      const formattedResult = result.map((item) => ({
        ...item,
        id: item.ID_Bodega,
      }));
      setDataBodegas(formattedResult);
    } catch (error) {
      console.error("Error al obtener los articulos:", error);
    }
  }

  useEffect(() => {
    fetchBodegas();
  }, []);

  const handleSubmitData = (data: Articulo) => {
    postData(data, "articulos");
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
        type="text"
        placeholder="Nombre del articulo"
        {...register("Nom_Articulo")}
      />
      <input
        className="w-full p-4"
        required
        type="text"
        placeholder="Tipo del articulo"
        {...register("Tipo_Articulo")}
      />
      <input
        className="w-full p-4"
        required
        type="text"
        placeholder="Marca del articulo"
        {...register("Marca_Articulo")}
      />
      <select className="w-full p-4" required {...register("ID_Bodega")}>
        <option value="">Selecciona la bodega</option>
        {dataBodegas.map((item) => (
          <option key={item.ID_Bodega} value={item.ID_Bodega}>
            {item.ID_Bodega}
          </option>
        ))}
      </select>
      <input
        className="w-full p-4"
        required
        type="text"
        placeholder="Precio del articulo"
        {...register("Precio")}
      />
      <input
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        value="Enviar"
      />
      <BotonHome />
    </form>
  );
}

export default ArituculosForm;
