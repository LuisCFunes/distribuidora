import { useEffect, useState } from "react";
import { getFacturas, Factura, editFactura, deleteFactura } from "../Facturas/factura.api";
import Table from "../../components/Table";

function FacturasTabla() {
  const [data, setData] = useState<Factura[]>([]);

  async function fetchData() {
    const result = await getFacturas();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (item: Factura) => {
    try {
      const update = await editFactura(item.ID_Factura, item);
      setData((prevData) =>
        prevData.map((x) => (x.ID_Factura === update.ID_Factura ? update : x))
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar la factura:", error);
    }
  };

  const handleDelete = async (item: Factura) => {
    try {
      const deleteItem = await deleteFactura(item.ID_Factura);
      setData((prevData) =>
        prevData.map((x) =>
          x.ID_Factura === deleteItem.ID_Factura ? deleteItem : x
        )
      );
      fetchData();
    } catch (error) {
      console.error("Error al actualizar la factura:", error);
    }
  };

  const columns = [
    { key: "ID_Factura", label: "ID" },
    { key: "Nom_Empleado", label: "Nombre" },
    { key: "Ape_Empleado", label: "Apellido" },
    { key: "Tel_Empleado", label: "Telefono" },
  ];

  return <Table data={data} columns={columns} title="Factura" onEdit={handleEdit} onDelete={handleDelete} />;
}

export default FacturasTabla;
