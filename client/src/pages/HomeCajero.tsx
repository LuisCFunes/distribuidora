import NavTablesCajero from "../components/NavTablesCajero";
import NavFormsCajero from "../components/NavFormsCajero";
import { useState } from "react";
import logoguardar from "../../public/backup_6933211-vectormaker-co.svg";
import logover from "../../public/backup_6933192-vectormaker-co.svg";
import logocajero from "../../public/clerk-vectormaker-co.svg";

function HomeCajero() {
  const [options, setOptions] = useState("");
  return (
    <main className="flex justify-center items-center h-screen">
      <section className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Home Cajero </h1>
        <img className="w-24 h-24 m-4" src={logocajero} alt="" />
        <button
          className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4 flex gap-2"
          onClick={() => setOptions("Ver Tablas")}
        >
          Ver Tablas
          <img className="w-6 h-6" src={logover} alt="" />
        </button>
        <button
          className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded flex gap-2"
          onClick={() => setOptions("Ingresar datos")}
        >
          Ingresar datos
          <img className="w-6 h-6" src={logoguardar} alt="" />
        </button>
        {options === "Ver Tablas" && <NavTablesCajero />}
        {options === "Ingresar datos" && <NavFormsCajero />}
      </section>
    </main>
  );
}

export default HomeCajero;
