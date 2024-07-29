import { pool } from "../db.js";

export const getBodegas = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM bodega");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getBodega = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM bodega WHERE ID_Bodega = ?",
      [req.params.ID_Bodega]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "bodega not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createBodega = async (req, res) => {
  try {
    const { Ubi_Bodega, Nom_Bodega } = req.body;
    const [result] = await pool.query(
      "INSERT INTO bodega( Ubi_Bodega, Nom_Bodega) VALUES (?, ?)",
      [Ubi_Bodega, Nom_Bodega]
    );
    res.json({
      ID_Bodega: result.insertID_Bodega,
      Ubi_Bodega,
      Nom_Bodega,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateBodega = async (req, res) => {
  try {
    const { ID_Bodega } = req.params;
    const { Ubi_Bodega, Nom_Bodega } = req.body;
    
    const result = await pool.query(
      "UPDATE bodega SET Ubi_Bodega = ?, Nom_Bodega = ? WHERE ID_Bodega = ?",
      [Ubi_Bodega, Nom_Bodega, ID_Bodega]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "bodega no encontrado" });
    }
    res.json({
      message: "Bodega actualizado exitosamente",
      data: { ID_Bodega, Ubi_Bodega, Nom_Bodega },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteBodega = async (req, res) => {
  try {
    const { ID_Bodega } = req.params;
    const [result] = await pool.query(
      "DELETE FROM bodega WHERE ID_Bodega = ?",
      [ID_Bodega]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "bodega not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
