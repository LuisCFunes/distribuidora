import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useAuth } from "../context/ContextToken";

interface FormData {
  user: string;
  password: string;
}

function Login() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormData>();

  const login = (data: FormData) => {
    Axios.post("http://localhost:3000/login", {
      user: data.user,
      password: data.password,
    })
      .then((response) => {
        if (response.data.auth) {
          setToken(response.data.token);
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        alert("Error al iniciar sesión:");
        console.error(error);
      });
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
      <form
        onSubmit={handleSubmit(login)}
        className="grid grid-rows-3 gap-4 m-auto w-[40%]"
      >
        <input
          className="w-full"
          type="text"
          required
          placeholder="Usuario"
          {...register("user")}
        />
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
    </>
  );
}

export default Login;
