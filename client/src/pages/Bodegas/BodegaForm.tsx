import { useForm } from "react-hook-form";
import { Bodega } from "./bodega.api";
import usePost from "../../hooks/usePost";
import BotonHome from "../../components/BotonHome";

function BodegaForm() {
  const { register, handleSubmit, reset } = useForm<Bodega>();
  const { postData } = usePost();

  const handleSubmitData = (data: Bodega) => {
    postData(data, "bodegas");
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
        placeholder="Ubicacion de la bodega"
        {...register("Ubi_Bodega")}
      />
      <input
        className="w-full p-4"
        required
        type="number"
        placeholder="Numero de bodega"
        {...register("Num_Bodega")}
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

export default BodegaForm;
