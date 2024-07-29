import { useForm } from "react-hook-form";
import { Cliente } from "./cliente.api";
import usePost from "../../hooks/usePost";
import BotonHome from "../../components/BotonHome";

function ClientesForm() {
    const { register, handleSubmit, reset } = useForm<Cliente>();
    const { postData } = usePost();
  
    const handleSubmitData = (data: Cliente) => {
      postData(data, "clientes");
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
          placeholder="Nombre del cliente"
          {...register("Nom_Cliente")}
        />
        <input
          className="w-full p-4"
          required
          type="text"
          placeholder="Apellido del cliente"
          {...register("Ape_Cliente")}
        />
        <input
          className="w-full p-4"
          required
          type="text"
          maxLength={8}
          minLength={8}
          placeholder="Telefono del cliente sin guion"
          {...register("Tel_Cliente")}
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

export default ClientesForm