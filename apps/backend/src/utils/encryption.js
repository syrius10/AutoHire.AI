import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const algorithm = "aes-256-cbc";
const secretKey = process.env.ENCRYPTION_SECRET;
const iv = crypto.randomBytes(16);

/**
 * Encrypts data before storing it in the database.
 */
export const encryptData = (data) => {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, "hex"), iv);
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");
  return { iv: iv.toString("hex"), encryptedData: encrypted };
};

/**
 * Decrypts stored data when retrieving it.
 */
export const decryptData = (encryptedData, iv) => {
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, "hex"), Buffer.from(iv, "hex"));
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};