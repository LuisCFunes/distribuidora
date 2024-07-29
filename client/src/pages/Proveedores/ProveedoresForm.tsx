import { useForm } from "react-hook-form";
import { proveedores } from "./proovedores.api";
import usePost from "../../hooks/usePost";
import BotonHome from "../../components/BotonHome";

function proveedoresForm() {
    const { register, handleSubmit, reset } = useForm<proveedores>();
    const { postData } = usePost();
    const handleSubmitData = (data: proveedores) => {
      postData(data, "proveedores");
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
          placeholder="Nombre del proveedor"
          {...register("Nom_Proveedor")}
        />
        <input
          className="w-full p-4"
          required
          type="number"
          placeholder="Ubicacion del proveedor"
          {...register("Ubi_Proveedor")}
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

export default proveedoresForm