import { pool } from "../db.js";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  const { user, password } = req.body;

  try {
    const [result] = await pool.query(
      "SELECT * FROM usuarios WHERE user = ? AND password = ?",
      [user, password]
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const token = jwt.sign({ userId: result[0].id }, "secreto", {
      expiresIn: "1h", 
    });

    res.json({ auth: true, token: token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
