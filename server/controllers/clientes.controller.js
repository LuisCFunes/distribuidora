import { pool } from "../db.js";

export const getClientes = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM cliente"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCliente = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM cliente WHERE ID_Cliente = ?", [
      req.params.ID_Cliente,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCliente = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO cliente(nom_cliente, ape_cliente, tel_cliente) VALUES (?, ?)",
      [title, description]
    );
    res.json({
      ID_Cliente: result.insertID_Cliente,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const result = await pool.query("UPDATE cliente SET ? WHERE ID_Cliente = ?", [
      req.body,
      req.params.ID_Cliente,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM cliente WHERE ID_Cliente = ?", [
      req.params.ID_Cliente,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};