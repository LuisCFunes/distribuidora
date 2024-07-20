import { useForm } from "react-hook-form";
import { Empleados,createEmpleados } from "./empleados.api";
import BotonHome from "../../components/BotonHome";

function EmpleadosForm() {
  const { register, handleSubmit, reset } = useForm<Empleados>();

  const handleSubmitData = (data: Empleados) => {
    createEmpleados(data);
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
        placeholder="Nombre del empleado"
        {...register("Nom_Empleado")}
      />
      <input
        className="w-full p-4"
        required
        type="text"
        placeholder="Apellido del empleado"
        {...register("Ape_Empleado")}
      />
      <input
        className="w-full p-4"
        required
        type="text"
        maxLength={8}
        minLength={8}
        placeholder="Telefono del cliente sin guion"
        {...register("Tel_Empleado")}
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

export default EmpleadosForm;
