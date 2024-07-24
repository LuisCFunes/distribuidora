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
    const { ID_Proovedor } = req.params;
    const { Nom_Proovedor, Ubi_Proovedor } = req.body;
    const [result] = await pool.query(
      "UPDATE proovedor SET Nom_Proovedor = IFNULL(?, Nom_Proovedor), Ubi_Proovedor = IFNULL(?, Ubi_Proovedor) WHERE ID_Proovedor = ?",
      [Nom_Proovedor, Ubi_Proovedor, ID_Proovedor]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Proovedor no encontrado" });
    }
    res.json({
      message: "Proovedor actualizado exitosamente",
      data: { ID_Proovedor, Nom_Proovedor, Ubi_Proovedor },
    });
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