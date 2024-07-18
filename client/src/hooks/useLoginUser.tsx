import Axios from "axios";
import { useAuth } from "../context/ContextToken";
import { useNavigate } from "react-router-dom";
interface FormData {
  user: string;
  password: string;
}

export default function useLoginUser() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const login = (formData: FormData) => {
    Axios.post("http://localhost:3000/login", {
      user: formData.user,
      password: formData.password,
    })
      .then((response) => {
        if (response.data.auth) {
          setToken(response.data.token);
          alert("Sesion iniciada como " + formData.user);
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        alert("Error al iniciar sesión:");
        console.error(error);
      });
  };

  return { login };
}
