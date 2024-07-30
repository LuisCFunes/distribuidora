import { useForm } from "react-hook-form";
import { Ordenes } from "./orden.api";
import { getproveedores, proveedores } from "../Proveedores/proovedores.api";
import usePost from "../../hooks/usePost";
import BotonHome from "../../components/BotonHome";
import { useEffect, useState } from "react";

function OrdenesForm() {
  const { register, handleSubmit, reset } = useForm<Ordenes>();
  const { postData } = usePost();
  const [data, setData] = useState<proveedores[]>([]);

  async function fetchProveedores() {
    try {
      const result = await getproveedores();
      const formattedResult = result.map((item) => ({
        ...item,
        id: item.ID_Proveedor,
      }));
      setData(formattedResult);
    } catch (error) {
      console.error("Error al obtener los proveedores:", error);
    }
  }

  useEffect(() => {
    fetchProveedores();
  }, []);

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
      <select className="w-full p-4" required {...register("ID_Proveedor")}>
        <option value="">Selecciona un proveedor</option>
        {data.map((item) => (
          <option key={item.ID_Proveedor} value={item.ID_Proveedor}>
            {item.ID_Proveedor}
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
