import crypto from "crypto";
import { pool } from "../db";

// ✅ Function to Generate API Key
export const generateAPIKey = async (userId, plan = "free") => {
    const apiKey = crypto.randomBytes(32).toString("hex");
    await pool.query(
        "INSERT INTO api_keys (key, user_id, plan) VALUES ($1, $2, $3)",
        [apiKey, userId, plan]
    );
    return apiKey;
};

// ✅ Function to Validate API Key
export const validateAPIKey = async (apiKey) {
    const { rows } = await pool.query(
        "SELECT * FROM api_keys WHERE key = $1",
        [apiKey]
    );
    return rows.length > 0 ? rows[0]: null;
};