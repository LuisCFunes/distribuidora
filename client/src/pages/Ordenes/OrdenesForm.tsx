import { useForm } from "react-hook-form";
import { Ordenes } from "./orden.api";
import usePost from "../../hooks/usePost";
import BotonHome from "../../components/BotonHome";

function OrdenesForm() {
  const { register, handleSubmit, reset } = useForm<Ordenes>();
  const { postData } = usePost();

  const handleSubmitData = (data: Ordenes) => {
    postData(data, "ordenes");
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
        type="date"
        placeholder="Fecha"
        {...register("Fecha_Orden")}
      />
      <input
        className="w-full p-4"
        required
        type="number"
        placeholder="NO_proveedor"
        {...register("ID_proveedor")}
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
