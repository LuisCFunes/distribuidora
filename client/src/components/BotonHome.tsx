import React from "react";
import { useNavigate } from 'react-router-dom';

const BotonHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-4 mb-4">
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded"
        onClick={() => navigate(-1)}
      >
        Regresar
      </button>
    </div>
  );
};

export default BotonHome;