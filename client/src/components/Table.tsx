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
  const [editingItem, setEditingItem] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<any>({});

  const handleEdit = (item: number) => {
    setEditingItem(item);
    setEditedData(item);
  };

  const handleSave = () => {
    onEdit(editedData);
    setEditingItem(null);
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
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>
                  {editingItem === item ? (
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
                {editingItem === item ? (
                  <>
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded mr-2 w-full"
                      onClick={handleSave}
                    >
                      Guardar
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded w-full"
                      onClick={() => setEditingItem(null)}
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
