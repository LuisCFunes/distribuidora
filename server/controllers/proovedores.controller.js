import { pool } from "../db.js";

export const getProovedores = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM proovedor"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProovedor = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM proovedor WHERE ID_Proovedor = ?", [
      req.params.ID_Proovedor,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Proovedor not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProovedor = async (req, res) => {
  try {
    const { Nom_Proovedor, Ubi_Proovedor } = req.body;
    const [result] = await pool.query(
      "INSERT INTO proovedor(Nom_Proovedor, Ubi_proovedor) VALUES (?, ?)",
      [Nom_Proovedor, Ubi_Proovedor]
    );
    res.json({
      ID_Proovedor: result.insertID_Proovedor,
      Nom_Proovedor,
      Ubi_Proovedor,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProovedor = async (req, res) => {
  try {
    const result = await pool.query("UPDATE proovedor SET ? WHERE ID_Proovedor = ?", [
      req.body,
      req.params.ID_Proovedor,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProovedor = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM proovedor WHERE ID_Proovedor = ?", [
      req.params.ID_Proovedor,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Proovedor not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};