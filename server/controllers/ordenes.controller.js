import { pool } from "../db.js";

export const getOrdenes = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM ordenes"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOrden = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM ordenes WHERE ID_Orden = ?", [
      req.params.ID_Orden,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "orden not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createOrden = async (req, res) => {
  try {
    const { Fecha_Orden, ID_Proveedor } = req.body;
    const [result] = await pool.query(
      "INSERT INTO ordenes(Fecha_Orden, ID_Proveedor) VALUES (?, ?)",
      [Fecha_Orden, ID_Proveedor, ID_Articulo]
    );
    res.json({
      ID_Orden: result.insertID_Orden,
      Fecha_Orden,
      ID_Proveedor
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateOrden = async (req, res) => {
  try {
    const { ID_Orden } = req.params;
    const { Fecha_Orden, ID_Proveedor } = req.body; 

    const result = await pool.query(
      "UPDATE ordenes SET Fecha_Orden = ?, ID_Proveedor = ?  WHERE ID_Orden = ?",
      [Fecha_Orden, ID_Proveedor, ID_Orden]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "orden no encontrado" });
    }

    res.json({
      message: "orden actualizado exitosamente",
      data: { ID_Orden, Fecha_Orden, ID_Proveedor },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteOrden = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM ordenes WHERE ID_Orden = ?", [
      req.params.ID_Orden,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "ordenes not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};