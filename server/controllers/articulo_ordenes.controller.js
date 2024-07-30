import { pool } from "../db.js";

export const getArtOrdenes = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM articulo_orden;");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getArticulo_Ordenes = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM articulo_orden WHERE ID = ?",
      [req.params.ID]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "articulo_orden not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createArticulo_Ordenes = async (req, res) => {
  try {
    const { ID_Articulo, ID_Orden } = req.body;
    const [result] = await pool.query(
      "INSERT INTO articulo_orden(ID_Articulo, ID_Orden) VALUES (?, ?)",
      [ID_Articulo, ID_Orden]
    );
    res.json({
      ID: result.ID,
      ID_Articulo,
      ID_Orden,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateArticulo_Ordenes = async (req, res) => {
  try {
    const { ID } = req.params;
    const { ID_Articulo, ID_Orden } = req.body;

    const result = await pool.query(
      "UPDATE articulo_orden SET ID_Articulo = ?, ID_Orden = ? WHERE ID = ?",
      [
        ID_Articulo,
        ID_Orden,
        ID,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "articulo_ordenes no encontrado" });
    }

    res.json({
      message: "articulo_orden actualizado exitosamente",
      data: { ID, ID_Articulo, ID_Orden },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteArticulo_Ordenes = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM Articulo_Orden WHERE ID = ?",
      [req.params.ID]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "articulo_orden not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
