import axios from "axios";

// 🔹 Provides AI-driven succession planning insights

export const getSuccessionPlan = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5040/leadership-succession",
      data,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching leadership succession plan:", error);
    return { error: "Failed to fetch succession planning data." };
  }
};
