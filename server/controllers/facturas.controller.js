import { pool } from "../db.js";

export const getFacturas = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM factura"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getFactura = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM factura WHERE ID_Factura = ?", [
      req.params.ID_Factura,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Factura not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createFactura = async (req, res) => {
  try {
    const { Subtotal, Impuesto, Total, ID_Cliente, ID_Empleado } = req.body;
    const [result] = await pool.query(
      "INSERT INTO factura(Subtotal, Impuesto, Total, ID_Cliente, ID_Empleado) VALUES (?, ?, ?, ?, ?)",
      [Subtotal, Impuesto, Total, ID_Cliente, ID_Empleado]
    );
    res.json({
      ID_Factura: result.insertID_Factura,
      Subtotal,
      Impuesto,
      Total,
      ID_Cliente,
      ID_Empleado, 
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateFactura = async (req, res) => {
  try {
    const result = await pool.query("UPDATE factura SET ? WHERE ID_Factura = ?", [
      req.body,
      req.params.ID_Factura,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteFactura = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM factura WHERE ID_Factura = ?", [
      req.params.ID_Factura,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Factura not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};