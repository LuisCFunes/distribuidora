import { useForm } from "react-hook-form";
import { Factura } from "./factura.api";
import { getClientes, Cliente } from "../Clientes/cliente.api";
import { getEmpleados, Empleados } from "../Empleados/empleados.api";
import { getArticulos, Articulo } from "../Articulos/articulo.api";
import usePost from "../../hooks/usePost";
import BotonHome from "../../components/BotonHome";
import { useEffect, useState } from "react";

function FacturasForm() {
  const { register, handleSubmit, reset } = useForm<Factura>();
  const { postData } = usePost();
  const [dataClientes, setDataClientes] = useState<Cliente[]>([]);
  const [dataEmpleados, setDataEmpleados] = useState<Empleados[]>([]);
  const [dataArticulos, setDataArticulos] = useState<Articulo[]>([]);

  async function fetchClientes() {
    try {
      const result = await getClientes();
      const formattedResult = result.map((item) => ({
        ...item,
        id: item.ID_Cliente,
      }));
      setDataClientes(formattedResult);
    } catch (error) {
      console.error("Error al obtener las facturas:", error);
    }
  }

  async function fetchEmpleados() {
    try {
      const result = await getEmpleados();
      const formattedResult = result.map((item) => ({
        ...item,
        id: item.ID_Empleado,
      }));
      setDataEmpleados(formattedResult);
    } catch (error) {
      console.error("Error al obtener las facturas:", error);
    }
  }

  async function fetchArticulos() {
    try {
      const result = await getArticulos();
      const formattedResult = result.map((item) => ({
        ...item,
        id: item.ID_Articulo,
      }));
      setDataArticulos(formattedResult);
    } catch (error) {
      console.error("Error al obtener los articulos:", error);
    }
  }

  useEffect(() => {
    fetchClientes();
    fetchEmpleados();
    fetchArticulos();
  }, []);

  const handleSubmitData = (data: Factura) => {
    postData(data, "facturas");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitData)}
      className="grid grid-rows-3 gap-4 mx-auto my-10 w-[40%]"
    >
      <select className="w-full p-4" required {...register("ID_Empleado")}>
        <option value="">Selecciona un empleado</option>
        {dataEmpleados.map((item) => (
          <option key={item.ID_Empleado} value={item.ID_Empleado}>
            {item.ID_Empleado}
          </option>
        ))}
      </select>
      <select className="w-full p-4" required {...register("ID_Cliente")}>
        <option value="">Selecciona un cliente</option>
        {dataClientes.map((item) => (
          <option key={item.ID_Cliente} value={item.ID_Cliente}>
            {item.ID_Cliente}
          </option>
        ))}
      </select>
      <select className="w-full p-4" required {...register("ID_Articulo")}>
        <option value="">Selecciona un articulo</option>
        {dataArticulos.map((item) => (
          <option key={item.ID_Articulo} value={item.ID_Articulo}>
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

export default FacturasForm;
