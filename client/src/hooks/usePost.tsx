import axios from "axios";

export default function usePost() {
  const postData = (formData, endpoint: string) => {
    axios.post(`http://localhost:3000/${endpoint}`, formData)
      .then((response) => {
        alert("Datos enviados");
        console.log(response);
      })
      .catch((error) => {
        alert("Error al enviar datos");
        console.error(error);
      });
  };

  return { postData };
}