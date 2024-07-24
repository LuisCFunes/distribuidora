import { useState } from "react";
import BotonHome from "./BotonHome";

interface Column {
  key: string;
  label: string;
}

interface TableProps {
  data: any[];
  columns: Column[];
  title: string;
  onEdit: (item: any) => void;
  onDelete: (item: any) => void;
}

function Table({ data, columns, title, onEdit, onDelete }: TableProps) {
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editedData, setEditedData] = useState<any>({});

  const handleEdit = (item: any) => {
    setEditingItemId(item.ID_Articulo || item.ID_Cliente);
    setEditedData({ ...item });
  };

  const handleSave = () => {
    onEdit(editedData);
    setEditingItemId(null);
  };

  const handleChange = (key: string, value: string) => {
    setEditedData({
      ...editedData,
      [key]: value,
    });
  };

  return (
    <div className="overflow-x-auto">
      <BotonHome />
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <table className="table table-zebra w-[80%] mx-auto">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ID_Articulo || item.ID_Cliente}>
              {columns.map((column) => (
                <td key={column.key}>
                  {editingItemId === (item.ID_Articulo || item.ID_Cliente) ? (
                    <input
                      className="w-full"
                      type="text"
                      value={editedData[column.key]}
                      onChange={(e) => handleChange(column.key, e.target.value)}
                    />
                  ) : (
                    item[column.key]
                  )}
                </td>
              ))}
              <td>
                {editingItemId === (item.ID_Articulo || item.ID_Cliente) ? (
                  <>
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded mr-2 w-full"
                      onClick={handleSave}
                    >
                      Guardar
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded w-full"
                      onClick={() => setEditingItemId(null)}
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded mr-2 w-full"
                      onClick={() => handleEdit(item)}
                    >
                      Editar
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded w-full"
                      onClick={() => onDelete(item)}
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;