import { pool } from "../db.js";

export const getArtOrdenes = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM articulo_ordenes");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getArticulo_Ordenes = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM articulo_ordenes WHERE ID_ArtOrdenes = ?",
      [req.params.ID_Articulo_Ordenes]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "articulo_ordenes not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createArticulo_Ordenes = async (req, res) => {
  try {
    const { ID_Articulo, ID_Orden } = req.body;
    const [result] = await pool.query(
      "INSERT INTO articulo_ordenes(ID_Articulo, ID_Orden) VALUES (?, ?)",
      [ID_Articulo, ID_Orden]
    );
    res.json({
      ID_ArtOrdenes: result.insertID_ArtOrdenes,
      ID_Articulo,
      ID_Orden,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateArticulo_Ordenes = async (req, res) => {
  try {
    const { ID_ArtOrdenes } = req.params;
    const { ID_Articulo, ID_Orden } = req.body;

    const result = await pool.query(
      "UPDATE articulo_ordenes SET ID_Articulo = ?, ID_Orden = ? WHERE ID_ArtOrdenes = ?",
      [
        ID_Articulo,
        ID_Orden,
        ID_ArtOrdenes,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "articulo_ordenes no encontrado" });
    }

    res.json({
      message: "articulo_ordenes actualizado exitosamente",
      data: { ID_ArtOrdenes, ID_Articulo, ID_Orden },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteArticulo_Ordenes = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM Articulo_Ordenes WHERE ID_ArtOrdenes = ?",
      [req.params.ID_ArtOrdenes]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Articulo_Ordenes not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
