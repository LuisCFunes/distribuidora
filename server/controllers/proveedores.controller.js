import { pool } from "../db.js";

export const getproveedores = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from proveedor;"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getproveedor = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM proveedor WHERE ID_Proveedor = ?", [
      req.params.ID_Proveedor,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "proveedor not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createproveedor = async (req, res) => {
  try {
    const { Nom_Proveedor, Ubi_Proveedor } = req.body;
    const [result] = await pool.query(
      "INSERT INTO proveedor(Nom_Proveedor, Ubi_Proveedor) VALUES (?, ?)",
      [Nom_Proveedor, Ubi_Proveedor]
    );
    res.json({
      ID_Proveedor: result.insertID_Proveedor,
      Nom_Proveedor,
      Ubi_Proveedor,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateproveedor = async (req, res) => {
  try {
    const { ID_Proveedor } = req.params;
    const { Nom_Proveedor, Ubi_Proveedor } = req.body;
    const [result] = await pool.query(
      "UPDATE proveedor SET Nom_Proveedor = ?, Ubi_Proveedor = ? WHERE ID_Proveedor = ?",
      [Nom_Proveedor, Ubi_Proveedor, ID_Proveedor]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "proveedor no encontrado" });
    }
    res.json({
      message: "proveedor actualizado exitosamente",
      data: { ID_Proveedor, Nom_Proveedor, Ubi_Proveedor },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteproveedor = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM proveedor WHERE ID_Proveedor = ?", [
      req.params.ID_Proveedor,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "proveedor not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};