import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM empleado"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEmpleado = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM empleado WHERE ID_Empleado = ?", [
      req.params.ID_Empleado,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Empleado not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEmpleado = async (req, res) => {
  try {
    const {Nom_Empleado , Ape_Empleado , Tel_Empleado } = req.body;
    const [result] = await pool.query(
      "INSERT INTO empleado(Nom_Empleado, Ape_Empleado, Tel_Empleado) VALUES (?, ?)",
      [Nom_Empleado , Ape_Empleado , Tel_Empleado]
    );
    res.json({
      ID_Empleado: result.insertNom_Empleado,
      Nom_Empleado,
      Ape_Empleado,
      Tel_Empleado
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEmpleado = async (req, res) => {
  try {
    const result = await pool.query("UPDATE empleado SET ? WHERE ID_Empleado = ?", [
      req.body,
      req.params.ID_Empleado,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEmpleado = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM empleado WHERE ID_Empleado = ?", [
      req.params.ID_Empleado,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Empleado not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};