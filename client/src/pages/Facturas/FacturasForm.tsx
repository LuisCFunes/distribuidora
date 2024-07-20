import { useForm } from "react-hook-form";
import { Factura } from "./factura.api";
import usePost from "../../hooks/usePost";
import BotonHome from "../../components/BotonHome";

function FacturasForm() {
    const { register, handleSubmit, reset } = useForm<Factura>();
    const { postData } = usePost();
  
    const handleSubmitData = (data: Factura) => {
      postData(data, "facturas");
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
          placeholder="Subtotal"
          {...register("Subtotal")}
        />
        <input
          className="w-full p-4"
          required
          type="number"
          placeholder="Impuesto"
          {...register("Impuesto")}
        />
        <input
          className="w-full p-4"
          required
          type="number"
          placeholder="Total"
          {...register("Total")}
        />
        <input
          className="w-full p-4"
          required
          type="number"
          placeholder="NO_Empleado"
          {...register("ID_Empleado")}
        />
        <input
          className="w-full p-4"
          required
          type="number"
          placeholder="NO_Cliente"
          {...register("ID_Cliente")}
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

export default FacturasForm