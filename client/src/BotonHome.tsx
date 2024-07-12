import React from "react";
import { Link } from "react-router-dom";

const BotonHome: React.FC = () => {
  return (
    <div className="flex justify-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded">
        <Link to="/">Regresar a Home</Link>
      </button>
    </div>
  );
};

export default BotonHome;
