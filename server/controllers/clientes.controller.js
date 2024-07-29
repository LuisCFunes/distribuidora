import { pool } from "../db.js";

export const getClientes = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM clientes"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCliente = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM clientes WHERE ID_Cliente = ?", [
      req.params.ID_Cliente,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Cliente not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCliente = async (req, res) => {
  try {
    const { Nom_Cliente, Ape_Cliente, Tel_Cliente } = req.body;
    const [result] = await pool.query(
      "INSERT INTO clientes(Nom_Cliente, Ape_Cliente, Tel_Cliente) VALUES (?, ?, ?)",
      [Nom_Cliente, Ape_Cliente, Tel_Cliente]
    );
    res.json({
      ID_Cliente: result.insertID_Cliente,
      Nom_Cliente,
      Ape_Cliente,
      Tel_Cliente,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const { ID_Cliente } = req.params;
    const { Nom_Cliente, Ape_Cliente, Tel_Cliente } = req.body; 

    const result = await pool.query(
      "UPDATE clientes SET Nom_Cliente = ?, Ape_Cliente = ?, Tel_Cliente = ? WHERE ID_Cliente = ?",
      [Nom_Cliente, Ape_Cliente, Tel_Cliente, ID_Cliente]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.json({
      message: "Cliente actualizado exitosamente",
      data: { ID_Cliente, Nom_Cliente, Ape_Cliente, Tel_Cliente }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const { ID_Cliente } = req.params;
    const [result] = await pool.query(
      "DELETE FROM clientes WHERE ID_Cliente = ?",
      [ID_Cliente]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Cliente not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};