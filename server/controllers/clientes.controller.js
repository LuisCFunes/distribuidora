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
      return res.status(404).json({ message: "Cliente not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCliente = async (req, res) => {
  try {
    const { nom_cliente, ape_cliente, tel_cliente } = req.body;
    const [result] = await pool.query(
      "INSERT INTO cliente(nom_cliente, ape_cliente, tel_cliente) VALUES (?, ?, ?)",
      [nom_cliente, ape_cliente, tel_cliente]
    );
    res.json({
      ID_Cliente: result.insertID_Cliente,
      nom_cliente,
      ape_cliente,
      tel_cliente,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const { ID_Cliente } = req.params;
    const { nom_cliente, ape_cliente, tel_cliente } = req.body; 

    const result = await pool.query(
      "UPDATE cliente SET nom_cliente = ?, ape_cliente = ?, tel_cliente = ? WHERE ID_Cliente = ?",
      [nom_cliente, ape_cliente, tel_cliente, ID_Cliente]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.json({
      message: "Cliente actualizado exitosamente",
      data: { ID_Cliente, nom_cliente, ape_cliente, tel_cliente }
    });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const { ID_Cliente } = req.params;
    const [result] = await pool.query(
      "DELETE FROM Articulo WHERE ID_Cliente = ?",
      [ID_Cliente]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Cliente not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};