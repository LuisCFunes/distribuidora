import { useForm } from "react-hook-form";
import useLoginUser from "../hooks/useLoginUser";
import { useState } from "react";

interface FormData {
  user: string;
  password: string;
}

function Login() {
  const { login } = useLoginUser();
  const { register, handleSubmit } = useForm<FormData>();
  const [selectUser, setSelectUser] = useState("");

  const handleSubmitLoginAdmin = (data: FormData) => {
    login({ user: "admin", password: data.password });
  };

  const handleSubmitLoginCajero = (data: FormData) => {
    login({ user: "cajero", password: data.password });
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
      {!selectUser && (
        <div className="flex flex-col items-center text-center gap-4">
          <p>Selecciona el usuario:</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-52 rounded"
            onClick={() => setSelectUser("admin")}
          >
            Admin
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 w-52 rounded"
            onClick={() => setSelectUser("cajero")}
          >
            Cajero
          </button>
        </div>
      )}

      {selectUser === "admin" && (
        <form
          onSubmit={handleSubmit(handleSubmitLoginAdmin)}
          className="grid grid-rows-3 gap-4 m-auto w-[40%]"
        >
          <input
            className="w-full"
            required
            type="password"
            placeholder="Contraseña"
            {...register("password")}
          />
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            value="Enviar"
          />
        </form>
      )}

      {selectUser === "cajero" && (
        <form
          onSubmit={handleSubmit(handleSubmitLoginCajero)}
          className="grid grid-rows-3 gap-4 m-auto w-[40%]"
        >
          <input
            className="w-full"
            required
            type="password"
            placeholder="Contraseña"
            {...register("password")}
          />
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            value="Enviar"
          />
        </form>
      )}
    </>
  );
}

export default Login;
