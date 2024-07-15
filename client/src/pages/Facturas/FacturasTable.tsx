import { useEffect, useState } from "react";
import { getFacturas, Factura } from "../Facturas/factura.api";
import BotonHome from "../../components/BotonHome";

function FacturasTabla() {
  const [data, setData] = useState<Factura[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getFacturas();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <BotonHome />
      <h1 className="text-2xl font-bold text-center">Facturas</h1>
      <table className="table table-zebra w-[80%] mx-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Subtotal</th>
            <th>Impuesto</th>
            <th>Total</th>
            <th>Cliente</th>
            <th>Empleado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ID_Factura}>
              <td>{item.ID_Factura}</td>
              <td>{item.Subtotal}</td>
              <td>{item.Impuesto}</td>
              <td>{item.Total}</td>
              <td>{item.ID_Cliente}</td>
              <td>{item.ID_Empleado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FacturasTabla;
