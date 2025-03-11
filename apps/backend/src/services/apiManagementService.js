import { pool } from "../db";
import crypto from "crypto";

/**
 * ✅ Generate an API key for a user
 */
export const generateAPIKey = async (userId, plan = "free") => {
  const apiKey = crypto.randomBytes(32).toString("hex");
  await pool.query(
    "INSERT INTO api_keys (key, user_id, plan) VALUES ($!, $2, $3)",
    [apiKey, userId, plan],
  );
  return apiKey;
};

/**
 * ✅ Revoke an API key
 */
export const revokeAPIKey = async (apiKey) => {
  const result = await pool.query(
    "DELETE FROM api_keys WHERE key = $1 RETURNING *",
    [apiKey],
  );
  return result.rowCount
    ? { message: "API key revoked successfully" }
    : { error: "API key not found" };
};

/**
 * ✅ Get API usage statistics
 */
export const getAPIUsageStats = async (userId) => {
  const result = await pool.query(
    "SELECT * FROM api_usage WHERE user_id = $1",
    [userId],
  );
  return result.rows;
};
