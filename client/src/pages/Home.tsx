import NavTables from "../components/NavTables";
import NavForms from "../components/NavForms";
import { useState } from "react";

function Home() {
  const [options, setOptions] = useState("");
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Home</h1>
        <button
          className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={() => setOptions("Ver Tablas")}
        >
          Ver Tablas
        </button>
        <button
          className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => setOptions("Ingresar datos")}
        >
          Ingresar datos
        </button>
        {options === "Ver Tablas" && <NavTables />}
        {options === "Ingresar datos" && <NavForms />}
      </div>
    </div>
  );
}

export default Home;
