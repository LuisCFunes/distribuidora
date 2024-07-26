import { useForm } from "react-hook-form";
import { ArtOrdenes } from "./art_orden.api";
import usePost from "../../hooks/usePost";
import BotonHome from "../../components/BotonHome";

function OrdenesForm() {
  const { register, handleSubmit, reset } = useForm<ArtOrdenes>();
  const { postData } = usePost();

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
      <input
        className="w-full p-4"
        required
        type="number"
        placeholder="NO_Articulo"
        {...register("ID_Articulo")}
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

export default OrdenesForm;
