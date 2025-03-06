import axios from "axios";

// Provides AI-powered workforce policy recommendations

export const fetchWorkforcePolicy = async () => {
  try {
    const response = await axios.get("/api/workforce-policy/generate");
    return response.data;
  } catch (error) {
    console.error("Error fetching workforce policy recommendations:", error);
    return null;
  }
};
