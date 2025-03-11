import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const algorithm = "aes-256-cbc";
const secretKey = process.env.ENCRYPTION_SECRET;
const iv = crypto.randomBytes(16);  // Initialization Vector

/**
 * Encrypts data before storing it in the database.
 * Uses AES-256-CBC with PKCS#7 padding scheme.
 */
export const encryptData = (data) => {
  const cipher = crypto.createCipheriv(
    algorithm, { mode: 'cbc', padding: crypto.constants.RSA_PKCS1_PADDING },
    Buffer.from(secretKey, "hex"),
    iv
  );
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex"); // Ensure proper padding is applied here
  return { iv: iv.toString("hex"), encryptedData: encrypted };
};

/**
 * Decrypts stored data when retrieving it.
 * Uses AES-256-CBC with PKCS#7 padding scheme.
 */
export const decryptData = (encryptedData, iv) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(secretKey, "hex"),
    Buffer.from(iv, "hex")
  );
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8"); // Decrypt properly with padding
  return decrypted;
};
