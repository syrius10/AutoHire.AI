import axios from "axios";

// AI-powered self-regulating workforce service

export async function regulateAIWorkforce() {
  try {
    const response = await axios.get(
      "http://localhost:5140/regulate-ai-workforce",
    );
    return response.data;
  } catch (error) {
    console.error("Error in AI workforce regulation:", error);
    throw error;
  }
}
