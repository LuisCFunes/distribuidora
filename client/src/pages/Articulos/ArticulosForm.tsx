import { useForm } from "react-hook-form";
import { Articulo } from "./articulo.api";
import usePost from "../../hooks/usePost";
import BotonHome from "../../components/BotonHome";

function ArituculosForm() {
    const { register, handleSubmit,reset } = useForm<Articulo>();
    const { postData } = usePost();

    const handleSubmitData = (data: Articulo) => {
        postData(data, 'articulos');
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
       <input
        className="w-full p-4"
        required
        type="text"
        placeholder="NO de la Factura"
        {...register("ID_Factura")}
      />
       <input
        className="w-full p-4"
        required
        type="text"
        placeholder="No de la bodega"
        {...register("ID_Bodega")}
      />
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
