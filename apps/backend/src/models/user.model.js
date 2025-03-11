import mongoose from "mongoose";
import { encryptData, decryptData } from "../utils/encryption";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        set: (value) => encryptData(value).encryptedData,   // Encrypt before saving
        get: (encrypted) => decryptData(encrypted, this.iv),    // Decrypt when retrieving
    },
    iv: String, // Store IV for decryption
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
});

export default mongoose.model("User", userSchema);