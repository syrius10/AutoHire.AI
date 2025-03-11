import { pool } from "../db";

export const authorizeRoles = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Access Denied" });
  }
  next();
};

export const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ error: "Access denied: insufficient privileges" });
    }
    next();
  };
};

export const authenticateAPIKey = async (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) return res.status(401).json({ error: "API key is required" });

  const { rows } = await pool.query("SELECT * FROM api_keys WHERE key = $1", [
    apiKey,
  ]);
  if (rows.length === 0)
    return res.status(403).json({ error: "Inavlid API key" });

  req.user = rows[0];
  next();
};
