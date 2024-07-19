import { pool } from "../db.js";

export const getArticulos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Articulo");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getArticulo = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM Articulo WHERE ID_Articulo = ?",
      [req.params.ID_Articulo]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Articulo not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createArticulo = async (req, res) => {
  try {
    const {
      Nom_Articulo,
      Tipo_Articulo,
      Marca_Articulo,
      ID_Factura,
      ID_Bodega,
      Precio
    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO Articulo(Nom_Articulo, Tipo_Articulo, Marca_Articulo, ID_Factura, ID_Bodega, Precio) VALUES (?, ?, ?, ?, ?, ?)",
      [Nom_Articulo, Tipo_Articulo, Marca_Articulo, ID_Factura, ID_Bodega,Precio]
    );
    res.json({
      ID_Articulo: result.insertID_Articulo,
      Nom_Articulo,
      Tipo_Articulo,
      Marca_Articulo,
      ID_Factura,
      ID_Bodega,
      Precio
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateArticulo = async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE Articulo SET ? WHERE ID_Articulo = ?",
      [req.body, req.params.ID_Articulo]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteArticulo = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM Articulo WHERE ID_Articulo = ?",
      [req.params.ID_Articulo]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Articulo not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
